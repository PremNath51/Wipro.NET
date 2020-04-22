/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    sysBuilder = require("gulp-systemjs-builder");
var paths = { webroot: "./wwwroot/" };
paths.mainJs = 'ClientApp/**/*.js';
paths.mainMinJs = 'ClientApp/**/*min.js';
paths.mainCss = 'ClientApp/**/*.css';
paths.mainMinCss = 'ClientApp/**/*.min.css';

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "dist/**/*.js";
paths.concatCssDest = paths.webroot + "dist/css/site.min.css";
const builder = new sysBuilder();//'', 'wwwroot/js/systemjs.config.js');
builder.loadConfigSync(paths.webroot + 'js/systemjs.config.prod.js');
// Generate systemjs-based builds
gulp.task('bundle:misc', function () {
    builder.buildStatic('jquery + bootstrap + file-saver', 'misc.js',//chartscatter
        {
            minify: true,
            globalName: 'misc'
        }).pipe(gulp.dest(paths.webroot + 'dist'));
});
gulp.task('bundle:angular', function () {
    builder.buildStatic('zone + shim + @angular/core +  @angular/common + @angular/platform-browser + @angular/http + @angular/animations', 'angular.js',
        {
            minify: true,
            globalName: 'angular'
        }).pipe(gulp.dest(paths.webroot + 'dist'));
});
gulp.task('bundle:css', function () {
    builder.buildStatic('bootstrapCss + primengCss + primengTheme', 'site.css',
        {
            minify: false,
            mangle: true
        }).pipe(gulp.dest(paths.webroot + 'dist'));
});
gulp.task('bundle:rxjs', function () {
    return builder.buildStatic('rxjs', 'rxjs.js',
        {
            minify: true,
            globalName: 'rxjs'
        }).pipe(gulp.dest(paths.webroot + 'dist'));
});
gulp.task('bundle:js', function () {
    builder.buildStatic('ClientApp/main.js',
        {
            //externals:
            //[
            //    'alasql',
            //    'jquery',
            //    'rxjs',
            //    '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/http'
            //],
            //globalDeps:
            //{
            //    '@angular/core': 'angular', '@angular/common': 'angular', '@angular/platform-browser': 'angular', '@angular/http': 'angular',
            //    'alasql': 'misc',
            //    'jquery': 'misc',
            //    'react': 'React',
            //    rxjs: 'rxjs'
            //},
            minify: true,
            sourceMaps: true, //'inline',
            lowResSourceMaps: true,
            mangle: true//, //runtime: false,
        }).pipe(gulp.dest(paths.webroot));
});
gulp.task('client:css', function () {
    gulp.src('ClientApp/**/*.css', { minify: true }).pipe(gulp.dest(paths.webroot + 'ClientApp'));
});
gulp.task('client:html', function () {
    gulp.src('ClientApp/**/*.html').pipe(gulp.dest(paths.webroot + 'ClientApp'));
});

gulp.task('bundle', ['bundle:rxjs', 'bundle:misc', 'bundle:angular', 'client:css', 'client:html'], function () {
    gulp.start('bundle:js');
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global)
{
    System.config(
        {
            transpiler: 'plugin-babel', //false, // 
            paths:
            {
                // paths serve as alias
                'npm:': 'node_modules/',
                'app:': 'ClientApp/',
                'root': 'wwwroot/'
            },
            // map tells the System loader where to look for things
            map:
            {
                // our app is within the app folder
                app: 'ClientApp',
                main: 'ClientApp/main.js',

                // angular bundles
                'angular': 'dist/angular.js',
                'misc': 'dist/misc.js',
                '@angular/core': 'npm:@angular/core/bundles/core.umd.min.js',
                '@angular/common': 'npm:@angular/common/bundles/common.umd.min.js',
                '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.min.js',
                '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.min.js',
                '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
                '@angular/http': 'npm:@angular/http/bundles/http.umd.min.js',
                '@angular/router': 'npm:@angular/router/bundles/router.umd.min.js',
                '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.min.js',
                '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.min.js',
                '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
                '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',

                // other libraries 
                'angular2-fontawesome': 'npm:angular2-fontawesome/bundles/angular2-fontawesome.umd.min.js',
                'primeng/components': 'npm:primeng/components',
                'primeng/primeng': 'npm:primeng/primeng.js',
                'ng2-slim-loading-bar': 'npm:ng2-slim-loading-bar/bundles/index.umd.js',
                'rxjs': 'npm:rxjs',
                'bootstrap': 'npm:bootstrap/dist/js/bootstrap.min.js',
                'bootstrapCss': 'npm:bootstrap/dist/css/bootstrap.css',
                'file-saver': 'npm:file-saver/FileSaver.min.js',
                'jquery': 'npm:jquery/dist/jquery.min.js',
                //'alasql': 'npm:alasql/dist/alasql.min.js',
                'plugin-babel': 'lib/plugin-babel/plugin-babel.js',
                'systemjs-babel-build': 'lib/plugin-babel/systemjs-babel-browser.js',
                'shim': 'npm:core-js/client/shim.min.js',
                'systemjs': 'npm:systemjs/dist/system.src.js'
            },
            depCache:
            {
                'main': ['@angular/core', '@angular/common', '@angular/platform-browser', '@angular/http', 'app:components/App', 'app:app.module', 'jquery']
            },
            meta:
            {
                '*.js':
                {
                    babelOptions:
                    {
                        es2015: false,
                        stage2: false,
                        stage3: false,
                        stage1: false //may be omitted
                    }
                }
            },
            // packages tells the System loader how to load when no filename and/or no extension
            packages:
            {
                app: { defaultExtension: 'js' },
                rxjs: { defaultExtension: 'js' },
                'primeng/components':
                {
                    defaultExtension: 'js'
                }
            }
        });
})(this);

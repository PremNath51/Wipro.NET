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
                'app:': 'ClientApp/app/'
            },
            // map tells the System loader where to look for things
            map:
            {
                // our app is within the app folder
                app: 'ClientApp',
                main: 'ClientApp/main.js',
                // angular bundles
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

                'angular2-fontawesome': 'npm:angular2-fontawesome/bundles/angular2-fontawesome.umd.min.js',
                'primeng/components': 'npm:primeng/components',
                'primeng/primeng': 'npm:primeng/primeng.js',
                'ng2-slim-loading-bar': 'npm:ng2-slim-loading-bar/bundles/index.umd.js',
                // other libraries 
                'rxjs': 'npm:rxjs',
                'bootstrap': 'npm:bootstrap/dist/js/bootstrap.min.js',
                'bootstrapCss': 'npm:bootstrap/dist/css/bootstrap.css',
                'primengCss': 'npm:primeng/resources/primeng.min.css',
                'primengTheme': 'npm:primeng/resources/themes/bootstrap/theme.css',
                'file-saver': 'npm:file-saver/FileSaver.min.js',
                'jquery': 'npm:jquery/dist/jquery.min.js',
                //'alasql': 'npm:alasql/dist/alasql.min.js',
                'plugin-babel': 'wwwroot/lib/plugin-babel/plugin-babel.js',
                'systemjs-babel-build': 'wwwroot/lib/plugin-babel/systemjs-babel-browser.js',
                //'chartjs': 'npm:chart.js/dist/Chart.bundle.min.js',
                'chartjs': 'wwwroot/lib/chart/Chart.Core.min.js',
                'chartscatter': 'wwwroot/lib/chart/Chart.Scatter.js',
                'legend': 'wwwroot/lib/chart/legend.min.js',
                'shim': 'npm:core-js/client/shim.min.js',
                'zone': 'npm:zone.js/dist/zone.min.js',
                'systemjs': 'npm:systemjs/dist/system.src.js'
            },
            depCache:
            {
                'main': ['@angular/core', '@angular/common', '@angular/platform-browser', '@angular/http', 'app:App', 'app:app.module', 'jquery', 'alasql']
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
                app:
                {
                    defaultExtension: 'js'
                },
                'primeng/components':
                {
                    defaultExtension: 'js'
                },
                rxjs:
                {
                    main: 'Rx',
                    defaultExtension: 'js'
                }
            }
        });
})(this);

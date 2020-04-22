import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { platformUniversalDynamic } from 'angular2-universal';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

// Enable either Hot Module Reloading or production mode
if (module['hot'])
{
    module['hot'].accept();
    module['hot'].dispose(() => { platform.destroy(); });
} else
{
    enableProdMode();
}
// Boot the application, either now or when the DOM content is loaded
const platform = platformBrowserDynamic();// platformUniversalDynamic();
const bootApplication = () => { platform.bootstrapModule(AppModule); };
if (document.readyState === 'complete')
{
    bootApplication();
} else
{
    document.addEventListener('DOMContentLoaded', bootApplication);
}

//if (process.env.ENV === 'production') {
//  enableProdMode();
//}
//platformBrowserDynamic().bootstrapModule(AppModule);

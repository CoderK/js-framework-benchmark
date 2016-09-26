import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';

// import { AppModule } from './app/';
import { AppModuleNgFactory } from './app/app.module.ngfactory' //generated code

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowser().bootstrapModuleFactory( AppModuleNgFactory );
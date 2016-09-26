import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
// import { AppModule } from './app';
import { AppModule } from './app.module';

// if (process.env.ENV === 'production') {
//   console.log("enable prod mode");
enableProdMode();
// }
platformBrowserDynamic().bootstrapModule(AppModule);
// platformBrowser().bootstrapModule(AppModule);

// platformBrowser().bootstrapModuleFactory( AppModuleNgFactory );
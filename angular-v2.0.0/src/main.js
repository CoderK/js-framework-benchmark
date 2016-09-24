"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var app_1 = require('./app');
if (process.env.ENV === 'production') {
    console.log("enable prod mode");
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule);
//# sourceMappingURL=main.js.map
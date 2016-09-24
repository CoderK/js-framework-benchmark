// import 'core-js/es6';
// import 'reflect-metadata';
// require('zone.js/dist/zone');
"use strict";
require('core-js/es6/reflect');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    console.log("production");
}
else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map
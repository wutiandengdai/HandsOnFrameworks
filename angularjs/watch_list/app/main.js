System.register(["./app.module", "@angular/platform-browser-dynamic"], function (exports_1, context_1) {
    "use strict";
    var app_module_1, platform_browser_dynamic_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }
        ],
        execute: function () {
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map
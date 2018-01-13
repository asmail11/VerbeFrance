System.register(['angular2/platform/browser', './info.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, info_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (info_component_1_1) {
                info_component_1 = info_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(info_component_1.AppInfo);
        }
    }
});

//# sourceMappingURL=boot.js.map

System.register(['angular2/core', './job.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, job_component_1;
    var AppInfo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (job_component_1_1) {
                job_component_1 = job_component_1_1;
            }],
        execute: function() {
            AppInfo = (function () {
                function AppInfo() {
                    this.name = "Welcome to Angular2";
                    this.age = "30";
                    this.jobs = ["developer", "admins", "manager"];
                }
                AppInfo.prototype.buClick = function (job) {
                    this.age = "job selected is:" + job;
                };
                AppInfo.prototype.buAdd = function (newItem) {
                    this.jobs.push(newItem);
                };
                AppInfo = __decorate([
                    core_1.Component({
                        selector: 'my-info',
                        templateUrl: "views/info.component.html",
                        directives: [job_component_1.AppJobs],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppInfo);
                return AppInfo;
            }());
            exports_1("AppInfo", AppInfo);
        }
    }
});

//# sourceMappingURL=info.component.js.map

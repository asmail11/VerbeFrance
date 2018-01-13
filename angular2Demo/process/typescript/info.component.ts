import {Component} from 'angular2/core';
import {AppJobs} from './job.component'
@Component(
    {
        selector:'my-info',
        templateUrl:"views/info.component.html",
        directives:[AppJobs],


}
)
export class AppInfo{
    name:string;
    age:string;
    jobs:string;

    buClick(job:string){
     this.age="job selected is:" + job;
    }
    buAdd(newItem:string){
        this.jobs.push(newItem);
    }
    constructor(){
        this.name="Welcome to Angular2";
        this.age="30";
        this.jobs=[ "developer", "admins", "manager" ];


    }

}
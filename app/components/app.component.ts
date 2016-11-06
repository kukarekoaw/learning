import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/components/app.component.html',
    styleUrls:['./app/components/app.component.css'],
})
export class AppComponent {
    title:string;
    devices:Object;

    constructor(){
        this.title = 'SmartHome';
    }
}

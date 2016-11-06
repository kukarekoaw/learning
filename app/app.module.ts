import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';
import {ChartModule} from "angular2-highcharts";

import {AppComponent}  from './components/app.component';
import {ChartComponent}  from './components/chart.component';
import {PanelSensorComponent} from "./components/panel-sensor.component";
import {PanelHomeComponent} from "./components/panel-home.component";

import {SensorsService} from "./shared/sensors.service";
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ChartModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ChartComponent,
        PanelSensorComponent,
        PanelHomeComponent
    ],
    providers: [SensorsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

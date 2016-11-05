import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ChartModule } from "angular2-highcharts";

import { AppComponent }  from './components/app.component';
import { ChartComponent}  from './components/chart.component';
import { SensorsService } from "./shared/sensors.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartModule, HttpModule ],
  declarations: [ AppComponent, ChartComponent],
  providers:[SensorsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

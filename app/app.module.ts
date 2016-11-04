import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './components/app.component';
import { ChartComponent}  from './components/chart.component';
import { ChartModule } from "angular2-highcharts";

@NgModule({
  imports:      [ BrowserModule, ChartModule ],
  declarations: [ AppComponent, ChartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

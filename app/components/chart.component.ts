/**
 * Created by kukareko on 04.11.2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { SensorsService } from '../shared/sensors.service';
import ChartObject = __Highcharts.ChartObject;
import {IDevice} from "../shared/device.model";

@Component({
    selector: 'chart-example',
    styleUrls: ['./app/components/chart.component.css'],
    templateUrl:'./app/components/chart.component.html'
})
export class ChartComponent implements OnInit{

    chart : ChartObject;
    options: Object;
    device:IDevice;
    @Input() name: string;

    constructor(private sensorsService:SensorsService) {
        this.sensorsService = sensorsService;
        this.options = {
            title: {text: ''},
            chart: {zoomType: 'xy', type:'spline'},
            xAxis : { type: 'datetime', ordinal: false},
        }
        /*
        setInterval(() => {
            this.dt+= (this.random(10) *1000000);
            let limit = this.random(1000);
            console.log(limit);
            this.chart.series[0].addPoint([this.dt, limit])
            this.chart.series[1].addPoint([this.dt, limit + this.random(100)])
        }, 1000);
        */
    }
    ngOnInit() {
        // Подгрузим структуру зарегистрированного устройства
        this.sensorsService.getStruct(this.name).then((data:any) =>{
            this.device = data;
            //console.log('Структура', data);
            this.chart.setTitle({text:this.device.info});
            // создадим серии
            this.device.struct.forEach(
                (sensor:any, index:any,array:any)=>array[index]['series'] = this.chart.addSeries({name : sensor.name, animation: false})
            );
            console.log(this.device);
        });

        this.sensorsService.getData(this.name, 1000).then((data:Array<Array<string>>) =>{
            //this.chart.addSeries({name : 'Процессор', animation: false})
            //this.chart.series[0].setData(data['cpu'], true);

            this.device.struct.forEach((obj:any) => obj.series.setData(data[obj.name], true))

        });
    }
    random(limit =10):number{return Math.random() * limit;}




    saveInstance(chartInstance:any) {
        console.log(chartInstance);
        this.chart = chartInstance;
    }

}
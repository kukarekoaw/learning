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
    device:IDevice
    timestamp:number;
    interval: number;
    @Input() name: string;
    @Input() limit: number;

    constructor(private sensorsService:SensorsService) {
        this.sensorsService = sensorsService;
        this.limit = 10;
        this.interval = 10;
        this.options = {
            title: {text: ''},
            chart: {zoomType: 'xy', type:'spline'},
            xAxis : { type: 'datetime', ordinal: false},
        }
        // Запуск таймера обновления данных
        setInterval(() => {
            this.updateData();
        }, 1000*this.interval);
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
        // Получим последние данные по устройству
        this.sensorsService.getData(this.name, this.limit).then((data:any) =>{
            // определим последнее время получения данных
            this.timestamp = data['dt'][data['dt'].length-1][0];
            // Для зарегистрированных серий установим начальные значения
            this.device.struct.forEach((obj:any) => obj.series.setData(data[obj.name], true))

        });
    }
    updateData(){
        this.sensorsService.getData(this.name, this.limit, this.timestamp / 1000).then((data:any) =>{
            if (data.dt) {
                //console.log("Обновление данных ->", data.dt.length);
                // определим последнее время получения данных
                this.timestamp = data['dt'][data['dt'].length - 1][0];
                // Для новых данных добавим значения в серии

                this.device.struct.forEach((sensor: any) =>
                {
                    if (data[sensor.name])
                        data[sensor.name].forEach((point:any) => {sensor.series.addPoint(point)})
                });
            }
            //else console.log("Обновление данных: новых нет");
        });

    }
    saveInstance(chartInstance:any) {
        console.log(chartInstance);
        this.chart = chartInstance;
    }

}
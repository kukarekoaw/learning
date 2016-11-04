/**
 * Created by kukareko on 04.11.2016.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'chart-example',
    styleUrls: ['./app/components/chart.component.css'],
    templateUrl:'./app/components/chart.component.html'
})
export class ChartComponent {
    chart : Object;
    options: Object;
    seriesName:string;
    dt: number = new Date().getTime();

    constructor() {
        this.options = {
            title: {text: ''},
            chart: {zoomType: 'xy', type:'spline'},
            xAxis : {
                type: 'datetime',
                ordinal: false
            },
            series: [
                { animation: false, name : 'Процессор', data: [
                    /*[-1743913407000, 29.5],
                      [-1742313407000, 28.5],
                    [-1742213407000, 29.5]*/
                ], },
                { name : 'Чипсет',  data: [/*
                    [-1743913407000, 29.5],
                    [-1742213407000, 30.5]*/
                ] }
            ]
        }

        setInterval(() => {
            this.dt+= parseInt(this.random(10) *100000000);
            let limit = this.random(1000);
            console.log(limit);
            this.chart.series[0].addPoint([this.dt, limit])
            this.chart.series[1].addPoint([this.dt, limit + this.random(100)])
        }, 1000);

    }
    random(limit =10){return Math.random() * limit;}

    onSeriesMouseOver (e:any) {
        this.seriesName = e.context.name;
    }


    saveInstance(chartInstance:any) {
        console.log(chartInstance);
        this.chart = chartInstance;
    }

}
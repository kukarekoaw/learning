import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class SensorsService {
    private apiUrl = 'http://192.168.1.13:8181/api/sensors';

    constructor(private http: Http) {}

    getData(sensor:string, limit = 100): any {
        let url = `${this.apiUrl}/${sensor}/last/${limit}`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(res => {
                let rawData = res.json();
                return rawData;
            })
            .catch(this.handleError);
    }
    getStruct(sensor:string){
        let url = `${this.apiUrl}/${sensor}/struct`;
        console.log(url);
        return this.http.get(url)
            .toPromise()
            .then(res => {
                let rawData = res.json();
                return rawData;

            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.log('Произошла ошибка', error);
        return Promise.reject(error.message || error);
    }
}
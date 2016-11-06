/**
 * Created by kukareko on 06.11.2016.
 */
import { Component, Input } from '@angular/core';
import {IDevice} from "../shared/device.model";

@Component({
    moduleId: module.id,
    selector: 'panel-sensor',
    templateUrl:'panel-sensor.component.html'
})
export class PanelSensorComponent {

    devices: Array<string>;

    constructor() {
        this.devices = ['rpi_shower'];
    }
}


/**
 * Created by Andrew Kukareko on 05.11.2016.
 */
export interface IDevice {
    id:string;
    name: string;
    info:string;
    struct: Array<Object>;
    data: Object;
}
export class Device implements IDevice {
    id:string;
    name: string;
    info:string;
    struct: Array<Object>;
    data: Object;

    constructor() {
        this.struct = [];
    }
}
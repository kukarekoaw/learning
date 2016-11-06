/**
 * Created by kukareko on 06.11.2016.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelHomeComponent }   from './components/panel-home.component';
import { PanelSensorComponent }      from './components/panel-sensor.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',     component: PanelHomeComponent },
    { path: 'devices',  component: PanelSensorComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
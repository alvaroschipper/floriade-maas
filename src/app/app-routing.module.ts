import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MapComponent} from './map/map.component';
import {HomescreenComponent} from './homescreen/homescreen.component';

const routes: Routes = [
  {path: 'route', component: MapComponent},
  {path: 'home', component: HomescreenComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

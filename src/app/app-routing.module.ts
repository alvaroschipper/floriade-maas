import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MapComponent} from './map/map.component';
import {HomescreenComponent} from './homescreen/homescreen.component';
import {RouteOptionsComponent} from './route-options/route-options.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'route', component: MapComponent},
  {path: 'home', component: HomescreenComponent},
  {path: 'routeoptions', component: RouteOptionsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

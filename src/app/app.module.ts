import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';

import {HomescreenComponent} from './homescreen/homescreen.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {GeoLocationService} from './services/geo-location.service';
import {DirectionsDirective} from './directives/directions.directive';
import {API_KEY} from '../../apikey';
import {RouteOptionsComponent} from './route-options/route-options.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    }),
    AppRoutingModule],
  declarations: [
    AppComponent,
    MapComponent,
    HomescreenComponent,
    DirectionsDirective,
    RouteOptionsComponent
  ],
  providers: [GeoLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {} from '@types/googlemaps';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {API_KEY} from '../../apikey';

import {DirectionsDirective} from './directives/directions.directive';

import {HomescreenComponent} from './homescreen/homescreen.component';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {RouteOptionsComponent} from './route-options/route-options.component';
import {PlacesComponent} from './places/places.component';

import {GeoLocationService} from './services/geo-location.service';
import {DistanceMatrixApiService} from './services/distance-matrix-api.service';
import {PlacesApiService} from './services/places-api.service';
import { PlaceOptionsComponent } from './place-options/place-options.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    }),
    AppRoutingModule],
  declarations: [
    AppComponent,
    MapComponent,
    HomescreenComponent,
    DirectionsDirective,
    RouteOptionsComponent,
    PlacesComponent,
    PlaceOptionsComponent
  ],
  providers: [GeoLocationService, DistanceMatrixApiService, PlacesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

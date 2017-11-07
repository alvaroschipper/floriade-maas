import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GeoLocationService } from './services/geo-location.service';
import { DirectionsDirective } from './directives/directions.directive';
import { API_KEY } from '../../apikey';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DirectionsDirective
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    })
  ],
  providers: [GeoLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AgmMap, LatLngLiteral, MapsAPILoader} from '@agm/core';

import {GeoLocationService} from '../services/geo-location.service';
import {DirectionsDirective} from '../directives/directions.directive';

declare const google: any;

const ALMERE_CENTRUM = {lat: 52.375241, lng: 5.219354};
const ALMERE_ESPLANADE = {lat: 52.367932, lng: 5.219485};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild(DirectionsDirective) directionsDirective: DirectionsDirective;
  @ViewChild(AgmMap) agmMap: AgmMap;

  origin: LatLngLiteral;
  destination: LatLngLiteral;
  zoom: number;
  streetViewControl: boolean;
  iconUrl: string;

  constructor(private geoLocationService: GeoLocationService, private mapsAPILoader: MapsAPILoader) {
    this.origin = ALMERE_CENTRUM;
    this.destination = ALMERE_ESPLANADE;
    this.zoom = 17;
    this.streetViewControl = false;
    this.iconUrl = '../../assets/user_location_marker.png';
  }

  ngOnInit() {
    if (this.directionsDirective.directionsDisplay === undefined) {
      this.mapsAPILoader.load().then(() => {
        this.directionsDirective.directionsDisplay = new google.maps.DirectionsRenderer;
      });
    }

    this.geoLocationService.getGeoLocation().then(position => {
      this.origin = {lat: position.coords.latitude, lng: position.coords.longitude};
    }).catch(error => {
      console.log(error.message);
    });
  }

  @HostListener('window:resize')
  centerRoute() {
    const bounds = this.directionsDirective.response.routes[0].bounds;
    this.agmMap.triggerResize()
      .then(() => (this.agmMap as any)._mapsWrapper.setCenter(bounds.getCenter()))
      .then(() => (this.agmMap as any)._mapsWrapper.fitBounds(bounds));
  }
}

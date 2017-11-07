import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core';

import { GeoLocationService } from '../services/geo-location.service';

const ALMERE_CENTRUM = {lat: 52.375241, lng: 5.219354};
const ALMERE_ESPLANADE = {lat: 52.367932, lng: 5.219485};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  origin: LatLngLiteral;
  destination: LatLngLiteral;
  zoom: number;
  streetViewControl: boolean;
  iconUrl: string;

  constructor(private geoLocationService: GeoLocationService) {
    this.origin = ALMERE_CENTRUM;
    this.destination = ALMERE_ESPLANADE;
    this.zoom = 17;
    this.streetViewControl = false;
    this.iconUrl = '../../assets/user_location_marker.png';
  }

  ngOnInit() {
    this.geoLocationService.getGeoLocation().then(position => {
      this.origin = {lat: position.coords.latitude, lng: position.coords.longitude};
    }).catch(error => {
      console.log(error.message);
    });
  }
}
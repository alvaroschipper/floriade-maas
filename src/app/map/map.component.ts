import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core';

import { GeoLocationService } from '../services/geo-location.service';

const ALMERE_CENTRUM = {lat: 52.375241, lng: 5.219354};

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  location: LatLngLiteral;
  zoom: number;
  streetViewControl: boolean;

  constructor(private geoLocationService: GeoLocationService) {
    this.location = ALMERE_CENTRUM;
    this.zoom = 17;
    this.streetViewControl = false;
  }

  ngOnInit() {
    this.geoLocationService.getGeoLocation().then(position => {
      this.location = {lat: position.coords.latitude, lng: position.coords.longitude};
    }).catch(error => {
      console.log(error.message);
    });
  }
}
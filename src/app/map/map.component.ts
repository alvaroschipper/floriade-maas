import { Component, OnInit } from '@angular/core';

import { GeoLocationService } from '../geo-location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  streetViewControl: boolean;

  constructor(private geoLocationService: GeoLocationService) {
    this.zoom = 17;
    this.streetViewControl = false;
  }

  ngOnInit() {
    this.geoLocationService.getGeoLocation().then(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    }).catch(error => {
      console.log(error.message)
    });
  }
}
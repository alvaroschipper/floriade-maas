import {Component, OnInit} from '@angular/core';
import {GeoLocationService} from '../services/geo-location.service';
import {DistanceMatrixApiService} from '../services/distance-matrix-api.service';
import {ALMERE_CENTRUM, ALMERE_ESPLANADE, ALMERE_FLORIADE} from '../domain/locations';

@Component({
  selector: 'app-route-options',
  templateUrl: './route-options.component.html',
  styleUrls: ['./route-options.component.css']
})
export class RouteOptionsComponent implements OnInit {

  routeOptions: [{
    travelMode: String,
    name: String,
    icon: String,
    travelTime: String,
    travelDistance: String
  }];

  constructor(private distanceMatrixApiService: DistanceMatrixApiService, private geoLocationService: GeoLocationService) {
    this.routeOptions = [{
      travelMode: 'WALKING',
      name: 'Walking',
      icon: 'directions_walk',
      travelTime: null,
      travelDistance: null
    },
      {
        travelMode: 'TRANSIT',
        name: 'FloKik',
        icon: 'directions_boat',
        travelTime: null,
        travelDistance: null
      },
      {
        travelMode: 'BICYCLING',
        name: 'Bicycling',
        icon: 'directions_bike',
        travelTime: null,
        travelDistance: null
      },
      {
        travelMode: 'TRANSIT',
        name: 'Transit',
        icon: 'directions_transit',
        travelTime: null,
        travelDistance: null
      },
    ];
  }

  ngOnInit() {
    this.geoLocationService.getGeoLocation().then(position => {
      for (const routeOption of this.routeOptions) {
        this.distanceMatrixApiService.getTimeAndDistance({lat: position.coords.latitude, lng: position.coords.longitude}, ALMERE_FLORIADE, routeOption.travelMode).subscribe(json => {
          routeOption.travelTime = json['rows'][0]['elements'][0]['duration']['text'];
          routeOption.travelDistance = json['rows'][0]['elements'][0]['distance']['text'];
        });
      }
    }, error => {
      console.error(error.message);
      for (const routeOption of this.routeOptions) {
        this.distanceMatrixApiService.getTimeAndDistance(ALMERE_CENTRUM, ALMERE_FLORIADE, routeOption.travelMode).subscribe(json => {
          routeOption.travelTime = json['rows'][0]['elements'][0]['duration']['text'];
          routeOption.travelDistance = json['rows'][0]['elements'][0]['distance']['text'];
        });
      }
    });
  }
}

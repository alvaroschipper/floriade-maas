import {Component, OnInit} from '@angular/core';
import {MapsAPILoader, LatLngLiteral} from '@agm/core';
import {GeoLocationService} from '../services/geo-location.service';
import {DistanceMatrixApiService} from "../services/distance-matrix-api.service";

declare const google: any;

@Component({
  selector: 'app-route-options',
  templateUrl: './route-options.component.html',
  styleUrls: ['./route-options.component.css']
})
export class RouteOptionsComponent implements OnInit {

  test: JSON;

  routeOptions: [{
    travelMode: String,
    name: String,
    icon: String,
    travelTime: String
  }];

  constructor(private distanceMatrixApiService: DistanceMatrixApiService,private geoLocationService: GeoLocationService, private mapsAPILoader: MapsAPILoader) {
    this.routeOptions = [{
      travelMode: 'WALKING',
      name: 'Walking',
      icon: 'directions_walk',
      travelTime: null
    },
      {
        travelMode: 'TRANSIT',
        name: 'FloKik',
        icon: 'directions_boat',
        travelTime: null
      },
      {
        travelMode: 'BICYCLING',
        name: 'Bicycling',
        icon: 'directions_bike',
        travelTime: null
      },
      {
        travelMode: 'TRANSIT',
        name: 'Transit',
        icon: 'directions_transit',
        travelTime: null
      },
    ];
  }

  ngOnInit() {
    this.distanceMatrixApiService.getDistanceMatrixObservable({lat: 52.375241, lng: 5.219354}, {lat: 52.356331, lng: 5.228428}, 'TRANSIT')
      .subscribe(json => {
        console.log(json['rows'][0]['elements'][0]['duration']['text']);
        this.routeOptions[0].travelTime = json['rows'][0]['elements'][0]['duration']['text'];
      });
  }
}

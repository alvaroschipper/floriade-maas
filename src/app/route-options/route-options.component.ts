import {Component, OnInit} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {GeoLocationService} from '../services/geo-location.service';

declare const google: any;

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
    travelTime: String
  }];

  constructor(private geoLocationService: GeoLocationService, private mapsAPILoader: MapsAPILoader) {
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
    this.mapsAPILoader.load().then(() => {
      this.geoLocationService.getGeoLocation().then(position => {
        const distanceMatrixService = new google.maps.DistanceMatrixService;
        for (const routeOption of this.routeOptions) {
          distanceMatrixService.getDistanceMatrix({
            origins: [{lat: position.coords.latitude, lng: position.coords.longitude}],
            destinations: [{lat: 52.356331, lng: 5.228428}],
            travelMode: [routeOption.travelMode]
          }, response => {
            routeOption.travelTime = response.rows[0].elements[0].duration.text;
            console.log(routeOption);
          });
        }
      });

    });
  }
}

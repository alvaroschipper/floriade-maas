import {Component, OnInit} from '@angular/core';
import {GeoLocationService} from '../services/geo-location.service';
import {DistanceMatrixApiService} from '../services/distance-matrix-api.service';
import {ALMERE_CENTRUM, ALMERE_FLORIADE} from '../domain/locations';
import {ROUTE_OPTIONS} from "../domain/route-options";

@Component({
  selector: 'app-route-options',
  templateUrl: './route-options.component.html',
  styleUrls: ['./route-options.component.css']
})
export class RouteOptionsComponent implements OnInit {
  routeOptions: any;

  constructor(private distanceMatrixApiService: DistanceMatrixApiService, private geoLocationService: GeoLocationService) {
    this.routeOptions = ROUTE_OPTIONS;
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

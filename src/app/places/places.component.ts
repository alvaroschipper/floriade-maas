import {Component, OnInit} from '@angular/core';
import {GeoLocationService} from '../services/geo-location.service';
import {PlacesApiService} from '../services/places-api.service';
import {ActivatedRoute} from '@angular/router';
import {ALMERE_CENTRUM} from '../domain/locations';
import {API_KEY} from '../../../apikey';
import {LatLngLiteral} from '@agm/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: any;
  placeType: string;
  imageMaxWidth: number;
  API_KEY: string;
  placeDetailsArray: any;
  placeDestination: LatLngLiteral;

  constructor(private placesApiService: PlacesApiService, private geoLocationService: GeoLocationService, private activatedRoute: ActivatedRoute) {
    this.places = [];
    this.placeDetailsArray = [];
    this.imageMaxWidth = 500;
    this.API_KEY = API_KEY;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.placeType = params.get('type');
    });
    this.geoLocationService.getGeoLocation().then(position => {
      const origin = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.placesApiService.getNearbyPlaces(origin, this.placeType).subscribe(places => {
        this.places = places;
      });
    }, error => {
      console.error(error.message);
      this.placesApiService.getNearbyPlaces(ALMERE_CENTRUM, this.placeType).subscribe(places => {
        this.places = places;
      });
    });
  }

  getPlaceDetails(placeID: string, placeIndex: number) {
    if (!this.placeDetailsArray[placeIndex]) {
      this.placesApiService.getPlaceDetails(placeID).subscribe(placeResult => {
        this.placeDetailsArray[placeIndex] = placeResult['result'];
      });
    }
  }

  planRouteToPlace(destination: LatLngLiteral){
    this.placeDestination = destination;
  }
}

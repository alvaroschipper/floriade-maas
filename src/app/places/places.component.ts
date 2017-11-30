import {Component, OnInit} from '@angular/core';
import {GeoLocationService} from '../services/geo-location.service';
import {PlacesApiService} from '../services/places-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: any;
  placeType: string;

  constructor(private placesApiService: PlacesApiService, private geoLocationService: GeoLocationService, private activatedRoute: ActivatedRoute) {
    this.places = [];
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.placeType = params.get('type');
    });
    this.geoLocationService.getGeoLocation().then(position => {
      const origin = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.placesApiService.getNearbyPlaces(origin, this.placeType).subscribe(json => {
        this.places = json['results'];
      });
    });
  }
}

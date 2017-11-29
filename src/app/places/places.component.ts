import {Component, OnInit} from '@angular/core';
import {GeoLocationService} from '../services/geo-location.service';
import {PlacesApiService} from '../services/places-api.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  places: any;

  constructor(private placesApiService: PlacesApiService, private geoLocationService: GeoLocationService) {
    this.places = [];
  }

  ngOnInit() {
    this.geoLocationService.getGeoLocation().then(position => {
      const origin = {lat: position.coords.latitude, lng: position.coords.longitude};
      this.placesApiService.getNearbyPlaces(origin).subscribe(json => {
        this.places = json['results'];
      });

    });
  }

}

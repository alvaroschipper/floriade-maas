import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LatLngLiteral} from '@agm/core';
import {API_KEY} from '../../../apikey';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlacesApiService {

  constructor(private httpClient: HttpClient) {}

  getNearbyPlaces(origin: LatLngLiteral, type: string): Observable<JSON> {

    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
      + '?location=' + origin.lat + ',' + origin.lng
      + '&rankby=distance'
      + '&type=' + type
      + '&opennow=true'
      + '&key=' + API_KEY;

    return this.httpClient.get<JSON>(url);
  }

  getPlaceDetails(placeID: String): Observable<JSON> {
    const url = 'https://maps.googleapis.com/maps/api/place/details/json'
      + '?placeid=' + placeID
      + '&key=' + API_KEY;

    return this.httpClient.get<JSON>(url);
  }
}

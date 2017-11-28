import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LatLngLiteral} from '@agm/core';
import {API_KEY} from '../../../apikey';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DistanceMatrixApiService {

  constructor(private httpClient: HttpClient) {
  }

  getDistanceMatrixObservable(origin: LatLngLiteral, destination: LatLngLiteral, travelMode: String): Observable<JSON> {

    const url = 'https://maps.googleapis.com/maps/api/distancematrix/json'
      + '?origins=' + origin.lat + ',' + origin.lng
      + '&destinations=' + destination.lat + ',' + destination.lng
      + '&mode=' + travelMode
      + '&key=' + API_KEY;

    return this.httpClient.get<JSON>(url);
  }
}

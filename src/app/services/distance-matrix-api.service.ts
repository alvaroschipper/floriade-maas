import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LatLngLiteral} from '@agm/core';
import {API_KEY} from '../../../apikey';
import {Observable} from 'rxjs/Observable';
import DistanceMatrixResponse = google.maps.DistanceMatrixResponse;

@Injectable()
export class DistanceMatrixApiService {

  constructor(private httpClient: HttpClient) {}

  public getTimeAndDistance(origin: LatLngLiteral, destination: LatLngLiteral, travelMode: String): Observable<DistanceMatrixResponse> {

    const url = 'https://maps.googleapis.com/maps/api/distancematrix/json'
      + '?origins=' + origin.lat + ',' + origin.lng
      + '&destinations=' + destination.lat + ',' + destination.lng
      + '&mode=' + travelMode.toLowerCase()
      + '&key=' + API_KEY;

    return this.httpClient.get<DistanceMatrixResponse>(url);
  }
}

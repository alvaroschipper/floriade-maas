import {Injectable} from '@angular/core';

@Injectable()
export class GeoLocationService {

  options: PositionOptions;

  constructor() {
    this.options = {
      enableHighAccuracy: true
    };
  }

  public getGeoLocation(): Promise<Position> {
    if (navigator.geolocation) {
      return new Promise((success, error) => {
        navigator.geolocation.getCurrentPosition(success, error, this.options);
      });
    }
  }
}

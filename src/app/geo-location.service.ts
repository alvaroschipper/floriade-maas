import { Injectable } from '@angular/core';
import { LatLngLiteral } from '@agm/core';

@Injectable()
export class GeoLocationService {

	options: PositionOptions;
	defaultGeoLocation: LatLngLiteral;

	constructor() {
		this.options = {
			enableHighAccuracy: true
		};
		this.defaultGeoLocation = {
			lat: 52.375241,
			lng: 5.219354
		}
	}

	public getGeoLocation(): Promise<Position> {
		if (navigator.geolocation) {
			return new Promise((success, error) => {
				navigator.geolocation.getCurrentPosition(success, error, this.options);
			})
		}
	} 
}
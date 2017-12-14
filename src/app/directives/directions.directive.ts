import {Directive, Input, OnChanges} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';

declare const google: any;

@Directive({
  selector: 'appDirections'
})
export class DirectionsDirective implements OnChanges {

  @Input() origin: any;
  @Input() destination: any;
  travelMode: string;
  directionsDisplay: any;
  response: any;

  constructor(private googleMapsAPIWrapper: GoogleMapsAPIWrapper) {}

  ngOnChanges() {
    this.updateDirections();
  }

  updateDirections() {
    this.googleMapsAPIWrapper.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setPanel(document.getElementById('directionsPanel'));
      this.directionsDisplay.setOptions({
        suppressMarkers: true
      });
      directionsService.route({
        origin: this.origin,
        destination: this.destination,
        travelMode: this.travelMode
      }, (response, status) => {
        if (status === 'OK') {
          this.response = response;
          this.directionsDisplay.setDirections(this.response);
        } else {
          console.error('Directions request failed due to ' + status);
        }
      });
    });
  }
}

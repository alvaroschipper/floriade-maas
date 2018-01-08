import {Directive, Input, OnChanges} from '@angular/core';
import {GoogleMapsAPIWrapper} from '@agm/core';
import {FLOKIK_START} from '../domain/locations';

declare const google: any;

@Directive({
  selector: 'appDirections'
})
export class DirectionsDirective implements OnChanges {

  @Input() origin: any;
  @Input() destination: any;
  waypoint: any;
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
      if (this.travelMode === 'FLOKIK') {
        this.travelMode = 'WALKING';
        this.destination = FLOKIK_START;
        this.directionsDisplay.setOptions({
          suppressMarkers: true,
          polylineOptions: {
            strokeOpacity: 0,
            icons: [{
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: '#4ec9fa',
                fillOpacity: 1,
                scale: 3,
                strokeColor: '#529ad7',
                strokeOpacity: 1,
                strokeWeight: 1.2
              },
              offset: '0',
              repeat: '11px'
            }]
          }
        });
      }

      if (this.waypoint) {
        directionsService.route({
          origin: this.origin,
          destination: this.destination,
          waypoints: [{'location': this.waypoint}],
          optimizeWaypoints: true,
          travelMode: this.travelMode
        }, (response, status) => {
          if (status === 'OK') {
            this.response = response;
            this.directionsDisplay.setDirections(this.response);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        });
      } else {
        directionsService.route({
          origin: this.origin,
          destination: this.destination,
          waypoints: [],
          optimizeWaypoints: true,
          travelMode: this.travelMode
        }, (response, status) => {
          if (status === 'OK') {
            this.response = response;
            this.directionsDisplay.setDirections(this.response);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        });
      }
    });
  }
}

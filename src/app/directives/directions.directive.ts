import { Directive, Input, OnChanges } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
declare var google: any;

@Directive({
  selector: 'appDirections'
})
export class DirectionsDirective implements OnChanges {
  @Input() origin: any;
  @Input() destination: any;
  directionsDisplay: any;

  constructor(private googleMapsAPIWrapper: GoogleMapsAPIWrapper) {}

  ngOnChanges() {
    this.updateDirections();
  }

  updateDirections() {
    this.googleMapsAPIWrapper.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      this.directionsDisplay.setMap(map);
      this.directionsDisplay.setOptions({
        suppressMarkers: true,
        polylineOptions: {
          strokeOpacity: 0,
          icons: [{
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: '#01b3fd',
              fillOpacity: 1,
              scale: 3.5,
              strokeColor: '#3378c3',
              strokeOpacity: 1,
              strokeWeight: 1.8
            },
            offset: '0',
            repeat: '10px'
          }]
        }
      });
      directionsService.route({
        origin: this.origin,
        destination: this.destination,
        travelMode: 'WALKING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });
    });
  }
}

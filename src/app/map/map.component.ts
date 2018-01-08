import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AgmMap, LatLngLiteral, MapsAPILoader} from '@agm/core';

import {GeoLocationService} from '../services/geo-location.service';
import {DirectionsDirective} from '../directives/directions.directive';
import {ActivatedRoute} from '@angular/router';
import {ALMERE_CENTRUM, ALMERE_FLORIADE} from '../domain/locations';
import {PLACE_OPTIONS} from '../domain/place-options';

declare const google: any;
declare let $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild(AgmMap) agmMap: AgmMap;
  @ViewChild(DirectionsDirective) directionsDirective: DirectionsDirective;

  origin: LatLngLiteral;
  destination: LatLngLiteral;
  waypoint: LatLngLiteral;
  zoom: number;
  streetViewControl: boolean;
  iconUrl: string;
  placeOptions: any;
  enableExplore: boolean;
  travelMode: string;


  constructor(private geoLocationService: GeoLocationService, private mapsAPILoader: MapsAPILoader, private activatedRoute: ActivatedRoute) {
    this.zoom = 16;
    this.streetViewControl = false;
    this.iconUrl = '../../assets/user_location_marker.png';
    this.placeOptions = PLACE_OPTIONS;
    this.enableExplore = true;
  }

  ngOnInit() {
    if (this.directionsDirective.directionsDisplay === undefined) {
      this.mapsAPILoader.load().then(() => {
        this.directionsDirective.directionsDisplay = new google.maps.DirectionsRenderer;
      });
    }
    this.setLocation();
    this.activatedRoute.paramMap.subscribe(params => {
      this.travelMode = params.get('travelMode');
      this.directionsDirective.travelMode = this.travelMode;
      if(params.get('destination.lat')) {
        this.enableExplore = false;
        if(params.get('WP')) {
          this.directionsDirective.waypoint = {lat: Number(params.get('destination.lat')), lng: Number(params.get('destination.lng'))};
          this.waypoint = {lat: Number(params.get('destination.lat')), lng: Number(params.get('destination.lng'))};
          this.destination = ALMERE_FLORIADE;
        } else {
          this.destination = {lat: Number(params.get('destination.lat')), lng: Number(params.get('destination.lng'))};
        }
      } else {
        this.destination = ALMERE_FLORIADE;
      }
    });
  }

  setLocation() {
    this.geoLocationService.getGeoLocation().then(position => {
      this.origin = {lat: position.coords.latitude, lng: position.coords.longitude};
    }).catch(error => {
      console.error(error.message);
      this.origin = ALMERE_CENTRUM;
    });
  }

  @HostListener('window:resize')
  centerRoute() {
    const bounds = this.directionsDirective.response.routes[0].bounds;
    this.agmMap.triggerResize()
      .then(() => (this.agmMap as any)._mapsWrapper.setCenter(bounds.getCenter()))
      .then(() => (this.agmMap as any)._mapsWrapper.fitBounds(bounds));
  }

  ngAfterViewInit() {
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});
  }
}

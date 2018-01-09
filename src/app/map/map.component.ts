import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AgmMap, LatLngLiteral, MapsAPILoader} from '@agm/core';

import {GeoLocationService} from '../services/geo-location.service';
import {DirectionsDirective} from '../directives/directions.directive';
import {ActivatedRoute} from '@angular/router';
import {ALMERE_CENTRUM, ALMERE_FLORIADE, FLOKIK_START, FLOKIK_STOP, FLOKIK_WEERWATER} from '../domain/locations';
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
  waypoint: any;
  zoom: number;
  streetViewControl: boolean;
  iconUrl: string;
  placeOptions: any;
  enableExplore: boolean;
  travelMode: string;
  flokik: any;


  constructor(private geoLocationService: GeoLocationService, private mapsAPILoader: MapsAPILoader, private activatedRoute: ActivatedRoute) {
    this.origin = ALMERE_CENTRUM;
    this.waypoint = [];
    this.zoom = 16;
    this.streetViewControl = false;
    this.iconUrl = '../../assets/user_location_marker.png';
    this.placeOptions = PLACE_OPTIONS;
    this.enableExplore = true;
    this.flokik = [FLOKIK_START, FLOKIK_WEERWATER, FLOKIK_STOP];
  }

  ngOnInit() {
    this.setupDirectionsDirective();
    this.setOrigin();
    this.setDestination();
  }

  ngAfterViewInit() {
    $('.modal').modal();
    $('.tooltipped').tooltip({delay: 50});
  }

  private setupDirectionsDirective() {
    if (this.directionsDirective.directionsDisplay === undefined) {
      this.mapsAPILoader.load().then(() => {
        this.directionsDirective.directionsDisplay = new google.maps.DirectionsRenderer;
      });
    }
  }

  private setOrigin() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        console.log('Position check');
        if (this.origin.lat !== Number(position.coords.latitude) || this.origin.lng !== Number(position.coords.longitude)) {
          this.origin = {lat: Number(position.coords.latitude), lng: Number(position.coords.longitude)};
          console.log('Position update');
        }
      }, error => {
        console.error(error.message);
      }, {enableHighAccuracy: true});
    }
  }

  private setDestination() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.travelMode = params.get('travelMode');
      this.directionsDirective.travelMode = this.travelMode;
      if (params.get('destination.lat')) {
        this.enableExplore = false;
        if (params.get('WP')) {
          this.waypoint = [{'location': {lat: Number(params.get('destination.lat')), lng: Number(params.get('destination.lng'))}}];
          this.directionsDirective.waypoint = this.waypoint;
          this.destination = ALMERE_FLORIADE;
        } else {
          this.destination = {lat: Number(params.get('destination.lat')), lng: Number(params.get('destination.lng'))};
        }
      } else {
        this.destination = ALMERE_FLORIADE;
      }
    });
  }

  @HostListener('window:resize')
  private centerRoute() {
    const bounds = this.directionsDirective.response.routes[0].bounds;
    this.agmMap.triggerResize()
      .then(() => (this.agmMap as any)._mapsWrapper.setCenter(bounds.getCenter()))
      .then(() => (this.agmMap as any)._mapsWrapper.fitBounds(bounds));
  }
}

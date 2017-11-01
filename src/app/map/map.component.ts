import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 52.375241;
  lng: number = 5.219354;
  zoom: number = 17;
  streetViewControl: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

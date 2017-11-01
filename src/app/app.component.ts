import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Floriade MaaS';
  lat: number = 52.375241;
  lng: number = 5.219354;
  zoom: number = 17;
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-route-options',
  templateUrl: './route-options.component.html',
  styleUrls: ['./route-options.component.css']
})
export class RouteOptionsComponent {

  constructor() { }

  @Input() routeOption: string;
  @Input() transitMode: string;
}

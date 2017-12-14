import {AfterViewInit, Component} from '@angular/core';
import {PLACE_OPTIONS} from '../domain/place-options';

declare let $: any;

@Component({
  selector: 'app-place-options',
  templateUrl: './place-options.component.html',
  styleUrls: ['./place-options.component.css']
})
export class PlaceOptionsComponent implements AfterViewInit {
  placeOptions: any;

  constructor() {
    this.placeOptions = PLACE_OPTIONS;
  }

  ngAfterViewInit() {
    $('.modal').modal();
  }
}

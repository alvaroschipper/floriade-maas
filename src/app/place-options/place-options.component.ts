import {AfterViewInit, Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-place-options',
  templateUrl: './place-options.component.html',
  styleUrls: ['./place-options.component.css']
})
export class PlaceOptionsComponent implements OnInit, AfterViewInit {

  placeOptions: [{
    category: String,
    categoryIcon: String,
    types: any
  }];

  constructor() {
    this.placeOptions = [
      {
        category: 'Food',
        categoryIcon: 'restaurant',
        types: [
          {name: 'Bakery', type: 'bakery', color: 'red darken-2'},
          {name: 'Cafe', type: 'cafe', color: 'indigo darken-2'},
          {name: 'Meal Takeaway', type: 'meal_takeaway', color: 'deep-orange darken-2'},
          {name: 'Restaurant', type: 'restaurant', color: 'light-green darken-2ull'},
          {name: 'Liquor Store', type: 'liquor_store', color: 'teal darken-2'}
        ]
      },

      {
        category: 'Entertainment',
        categoryIcon: 'theaters',
        types: [
          {name: 'Amusement Park', type: 'amusement_park', color: 'red darken-2'},
          {name: 'Library', type: 'library', color: 'indigo darken-2'},
          {name: 'Casino', type: 'casino', color: 'deep-orange darken-2'},
          {name: 'Cinema', type: 'movie_theater', color: 'light-green darken-2ull'},
          {name: 'Park', type: 'park', color: 'teal darken-2'},
        ]
      },
      {
        category: 'Shopping',
        categoryIcon: 'shopping_cart',
        types: [
          {name: 'Book Store', type: 'book_store', color: 'red darken-2'},
          {name: 'Clothing Store', type: 'clothing_store', color: 'indigo darken-2'},
          {name: 'Convenience Store', type: 'convenienc  e_store', color: 'deep-orange darken-2'},
          {name: 'Department Store', type: 'department_store', color: 'light-green darken-2ull'},
          {name: 'Electronics Store', type: 'electronics_store', color: 'teal darken-2'},
          {name: 'Shoe Store', type: 'shoe_store', color:  'lime darken-2'},
        ]
      },
      {
        category: 'Beauty',
        categoryIcon: 'spa',
        types: [
          {name: 'Beauty Salon', type: 'beauty_salon', color: 'red darken-2'},
          {name: 'Hair Care', type: 'hair_care', color: 'indigo darken-2'},
          {name: 'Spa', type: 'spa', color: 'deep-orange darken-2'},
        ]
      },
      {
        category: 'Health',
        categoryIcon: 'local_hospital',
        types: [
          {name: 'Hospital', type: 'hospital', color: 'red darken-2'},
          {name: 'Doctor', type: 'doctor', color: 'indigo darken-2'},
          {name: 'Pharmacy', type: 'pharmacy', color: 'deep-orange darken-2'}
        ]
      },
      {
        category: 'Cash',
        categoryIcon: 'local_atm',
        types: [
          {name: 'ATM', type: 'atm', color: 'red darken-2'},
          {name: 'Bank', type: 'bank', color: 'indigo darken-2'}
        ]
      },
    ];
  }


  ngOnInit() {
    console.log(this.placeOptions);
  }
  ngAfterViewInit() {
    $('.modal').modal();
  }
}

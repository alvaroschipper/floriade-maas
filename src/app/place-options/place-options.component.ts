import {AfterViewInit, Component} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-place-options',
  templateUrl: './place-options.component.html',
  styleUrls: ['./place-options.component.css']
})
export class PlaceOptionsComponent implements AfterViewInit {

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
          {name: 'Bakery', type: 'bakery', color: 'red darken-1'},
          {name: 'Cafe', type: 'cafe', color: 'orange darken-1'},
          {name: 'Meal Takeaway', type: 'meal_takeaway', color: 'pink darken-1'},
          {name: 'Restaurant', type: 'restaurant', color: 'blue darken-1'},
          {name: 'Liquor Store', type: 'liquor_store', color: 'purple darken-1'}
        ]
      },

      {
        category: 'Entertainment',
        categoryIcon: 'theaters',
        types: [
          {name: 'Amusement Park', type: 'amusement_park', color: 'red darken-1'},
          {name: 'Library', type: 'library', color: 'orange darken-1'},
          {name: 'Casino', type: 'casino', color: 'pink darken-1'},
          {name: 'Cinema', type: 'movie_theater', color: 'blue darken-1'},
          {name: 'Park', type: 'park', color: 'purple darken-1'},
        ]
      },
      {
        category: 'Shopping',
        categoryIcon: 'shopping_cart',
        types: [
          {name: 'Book Store', type: 'book_store', color: 'red darken-1'},
          {name: 'Clothing Store', type: 'clothing_store', color: 'orange darken-1'},
          {name: 'Convenience Store', type: 'convenienc  e_store', color: 'pink darken-1'},
          {name: 'Department Store', type: 'department_store', color: 'blue darken-1'},
          {name: 'Electronics Store', type: 'electronics_store', color: 'purple darken-1'},
          {name: 'Shoe Store', type: 'shoe_store', color:  'teal darken-1'},
        ]
      },
      {
        category: 'Beauty',
        categoryIcon: 'spa',
        types: [
          {name: 'Beauty Salon', type: 'beauty_salon', color: 'red darken-1'},
          {name: 'Hair Care', type: 'hair_care', color: 'orange darken-1'},
          {name: 'Spa', type: 'spa', color: 'pink darken-1'},
        ]
      },
      {
        category: 'Health',
        categoryIcon: 'local_hospital',
        types: [
          {name: 'Hospital', type: 'hospital', color: 'red darken-1'},
          {name: 'Doctor', type: 'doctor', color: 'orange darken-1'},
          {name: 'Pharmacy', type: 'pharmacy', color: 'pink darken-1'}
        ]
      },
      {
        category: 'Cash',
        categoryIcon: 'local_atm',
        types: [
          {name: 'ATM', type: 'atm', color: 'red darken-1'},
          {name: 'Bank', type: 'bank', color: 'orange darken-1'}
        ]
      },
    ];
  }

  ngAfterViewInit() {
    $('.modal').modal();
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-options',
  templateUrl: './place-options.component.html',
  styleUrls: ['./place-options.component.css']
})
export class PlaceOptionsComponent implements OnInit {

  placeOptions: [{
    category: String,
    categoryIcon: String,
    types: any
  }];

  constructor() {
    this.placeOptions = [
      {category: 'Food',
        categoryIcon: 'restaurant',
        types: [
          { name: 'Bakery', type: 'bakery', typeIcon: 'null'},
          { name: 'Cafe', type: 'cafe', typeIcon: 'null'},
          { name: 'Meal Takeaway', type: 'meal_takeaway', typeIcon: 'null'},
          { name: 'Restaurant', type: 'restaurant', typeIcon: 'null'},
          { name: 'Liquor Store', type: 'liquor_store', typeIcon: 'null'}
        ]},
      {
        category: 'Health',
        categoryIcon: 'local_hospital',
        types: [
          { name: 'Hospital', type: 'hospital', typeIcon: 'null'},
          { name: 'Doctor', type: 'doctor', typeIcon: 'null'},
          { name: 'Pharmacy', type: 'pharmacy', typeIcon: 'null'}
        ]},
      {
        category: 'Entertainment',
        categoryIcon: 'theaters',
        types: [
          { name: 'Amusement Park', type: 'amusement_park', typeIcon: 'null'},
          { name: 'Library', type: 'library', typeIcon: 'null'},
          { name: 'Casino', type: 'casino', typeIcon: 'null'},
          { name: 'Cinema', type: 'movie_theater', typeIcon: 'null'},
          { name: 'Park', type: 'park', typeIcon: 'null'},
        ]},
      {
        category: 'Cash',
        categoryIcon: 'local_atm',
        types: [
          { name: 'ATM', type: 'atm', typeIcon: 'null'},
          { name: 'Bank', type: 'bank', typeIcon: 'null'}
        ]},
      {
        category: 'Shopping',
        categoryIcon: 'shopping_cart',
        types: [
          { name: 'Book Store', type: 'book_store', typeIcon: 'null'},
          { name: 'Clothing Store', type: 'clothing_store', typeIcon: 'null'},
          { name: 'Convenience Store', type: 'convenience_store', typeIcon: 'null'},
          { name: 'Department Store', type: 'department_store', typeIcon: 'null'},
          { name: 'Electronics Store', type: 'electronics_store', typeIcon: 'null'},
          { name: 'Shoe Store', type: 'shoe_store', typeIcon: 'null'},
        ]},
      {
        category: 'Beauty',
        categoryIcon: 'spa',
        types: [
          { name: 'Beauty Salon', type: 'beauty_salon', typeIcon: 'null'},
          { name: 'Hair Care', type: 'hair_care', typeIcon: 'null'},
          { name: 'Spa', type: 'spa', typeIcon: 'null'},
        ]},
      {
        category: 'Transit',
        categoryIcon: 'directions_bus',
        types: [
          { name: 'Bus Station', type: 'bus_station', typeIcon: 'null'},
          { name: 'Taxi Stand', type: 'taxi_stand', typeIcon: 'null'},
          { name: 'Train Station', type: 'train_station', typeIcon: 'null'},
        ]}
    ];
  }

  ngOnInit() {
    console.log(this.placeOptions);
  }
  /*
   Transit
  */
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = [
    {
      name: 'San Francisco',
      imgUrl: 'assets/images/sf.jpg'
    }, {
      name: 'London',
      imgUrl: 'assets/images/london.jpeg'
    }, {
      name: 'Sydney',
      imgUrl: 'assets/images/gibralter.jpeg'
    },
    {
      name: 'Seattle',
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4EIjk183KfiiW2gNm9OL__MBKovghDwN_g&usqp=CAU'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

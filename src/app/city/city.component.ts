import {Component, OnInit} from '@angular/core';
import {CITIES} from '../cities';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  // @Input('cityIndex') cityIndex: number;
  // @Input('city') city: any;
  cities: any = CITIES;
  city: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.city = CITIES.find(city => {
          return city.id === parseInt(params.get('id'), 10);
        });
      });
    console.log(this.city);
  }

}

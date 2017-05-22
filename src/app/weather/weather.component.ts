import { Component, OnInit } from '@angular/core';

import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const APPID = 'd572e3897b56c1638fada0388125c161';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = 'Atlanta';
  temperature: number;

  http: Http;
  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.fetchWeather();
  }

  fetchWeather() {

    let params = new URLSearchParams();
    params.set('q', this.city);
    params.set('APPID', APPID);
    params.set('units', 'imperial');
    this.http.get('http://api.openweathermap.org/data/2.5/weather',
      { search: params })
      .toPromise()
      .then(resp => resp.json())
      .then(data => {
        this.temperature = data.main.temp;
      });

  }

}

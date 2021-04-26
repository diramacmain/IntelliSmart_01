import { Component, OnInit } from '@angular/core';
import { faBolt, faWind, faWater, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  faBolt = faBolt;
  faWind = faWind;
  faWater = faWater;
  faTemperatureHigh = faTemperatureHigh;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import * as NoSleep from 'nosleep.js';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  noSleep: any;

  constructor() {
    this.noSleep = new NoSleep.default();
    this.noSleep.enable();
    localStorage.setItem('repetitions', '0');
  }

  ngOnInit() {
  }

}

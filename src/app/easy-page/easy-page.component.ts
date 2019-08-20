import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-easy-page',
  templateUrl: './easy-page.component.html',
  styleUrls: ['./easy-page.component.scss']
})
export class EasyPageComponent implements OnInit {
  counter$: Observable<number>;
  count = 90;

  constructor() {


    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count)

      // a [routerLink]="['/about']">About Us</a>
    );
    this.prepareToSprint();
  }

  ngOnInit() {
  }

  prepareToSprint() {
    setTimeout(() => {
      this.letsSprint();
    }, (this.count * 1000));
  }

  letsSprint() {
    console.log('navigate to sprint page')
  }


}


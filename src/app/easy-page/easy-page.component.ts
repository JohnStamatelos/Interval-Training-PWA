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
  reps : number;

  constructor(private router: Router) {
    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count)

      // a [routerLink]="['/about']">About Us</a>
    );
    this.startSprintTimer();
  }

  ngOnInit() {
    this.reps = +localStorage.getItem('repetitions') + 1;
  }

  startSprintTimer() {
    setTimeout(() => {
      this.navigateToSprint();
    }, (this.count * 1000));
  }

  navigateToSprint() {
    this.router.navigate(['/sprint']);
  }

}

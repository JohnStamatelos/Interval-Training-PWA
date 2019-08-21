import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprint-page',
  templateUrl: './sprint-page.component.html',
  styleUrls: ['./sprint-page.component.scss']
})
export class SprintPageComponent implements OnInit {
  counter$: Observable<number>;
  count = 30;

  repetitions: number = +localStorage.getItem('repetitions') + 1;

  constructor(private router: Router) {

    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
    this.startSprintTimer();
  }

  ngOnInit() {
  }

  startSprintTimer() {
    setTimeout(() => {
      this.navigateToSprint();
    }, (this.count * 1000));
  }

  navigateToSprint() {
    if (this.repetitions < 8) {
      localStorage.setItem('repetitions', this.repetitions.toString())
      this.router.navigate(['/easy']);
    } else {

      localStorage.removeItem('repetitions')
      alert('End of workout!')
    }

  }

}

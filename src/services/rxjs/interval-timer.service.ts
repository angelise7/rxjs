import { Injectable } from '@angular/core';
import { Observable, interval, timer } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class IntervalTimerService {

  constructor() {
    const interval$ = interval(1000);

    interval$.subscribe(r => {
      // console.log(r)
    })

    const timer$ = timer(3000);
    timer$.subscribe(r => {
      console.log(r)
    })

  }
}

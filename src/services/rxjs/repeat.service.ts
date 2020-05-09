import { Injectable } from '@angular/core';
import { of, interval } from 'rxjs'
import { repeat, repeatWhen } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RepeatService {

  constructor() {
    const source$ = of(1);
    source$.pipe(
      repeat(10)
    ).subscribe(r => {
      // console.log(r)
    }, null, () => {
      // console.log('complete')
    })

    const repeatWhen$ = of(4, 5, 6);
    repeatWhen$
      .pipe(
        repeatWhen(() => {
          return interval(2000)
        })
      )
      .subscribe(r => {
        console.log(r)
      })
  }
}

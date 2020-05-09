import { Injectable } from '@angular/core';
import { of } from 'rxjs'
import { repeat } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RepeatService {

  constructor() {
    const source$ = of(1);
    source$.pipe(
      repeat(10)
    ).subscribe(r => {
      console.log(r)
    }, null, () => {
      console.log('complete')
    })
  }
}

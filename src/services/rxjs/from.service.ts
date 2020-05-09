import { Injectable } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FromService {

  constructor() {

    //from
    const source$ = from([1, 3]);
    source$.subscribe(r => {
      // console.log(r)
    })


    //fromPromise
    const promise = Promise.reject(1);
    const promise$ = from(promise);
    promise$.subscribe(r => {
      console.log(r)
    }, e => {
      console.log(e)
    })

    //fromEvent
  }
}

import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { count, refCount, publish, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RefCountService {

  constructor() {
    const source$ = interval(1000).pipe(
      publish(),
      refCount()
    )

    const a = source$.subscribe(r => {
      console.log('a' + r)
    }, () => {
      console.log('error')
    }, () => {
      console.log('a+done')
    })

    let b;
    setTimeout(() => {
      b = source$.subscribe(r => {
        console.log('b' + r)
      }, null, () => {
        console.log('b+done')
      })
    }, 3000);

    setTimeout(() => {
      a.unsubscribe()
    }, 5000);


    setTimeout(() => {
      b.unsubscribe()
    }, 7000);

  }
}

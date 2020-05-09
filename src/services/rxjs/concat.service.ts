import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { concat } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConcatService {

  constructor() {
    const source1$ = of(1, 2, 3);
    const source2$ = of(4, 5, 6);

    const concat$ = source1$.pipe(
      concat(source2$)
    ).subscribe(r => {
      console.log(r)
    });

    // const concated$ = concat(source1$, source2$)
    //   .subscribe(r => {
    //     console.log(r)
    //   })
  }
}

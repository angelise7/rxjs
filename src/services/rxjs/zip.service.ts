import { Injectable } from '@angular/core';
import { of, interval } from 'rxjs';
import { zip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZipService {

  constructor() {
    const source1$ = of({ 1: 1 }, { 2: 2 }, { 3: 3 });
    const source2$ = interval(1000);
    const source3$ = of('a', 'b', 'c');
    // const zip$ = zip(source2$, source1$)
    // zip$.subscribe(r => {
    //   console.log(r)
    // })

    const zip$ = source1$
      .pipe(
        zip(source2$, source3$)
      )
      .subscribe(r => {
        console.log(r)
      })
  }
}

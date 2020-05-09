import { Injectable } from '@angular/core';
import { timer, merge } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MergeService {

  constructor() {
    const source1$ = timer(0, 1000).pipe(map(x => x + 'A'));
    const source2$ = timer(0, 500).pipe(map(x => x + 'B'));
    const source3$ = timer(0, 700).pipe(map(x => x + 'C'));

    // const merge$ = source1$
    //   .pipe(
    //     merge(source2$, source3$, 2)
    //   ).subscribe(r => {
    //     console.log(r)
    //   });

    // const merge$ = merge(source1$, source2$, source3$, 2);
    // merge$.subscribe(r => {
    //   console.log(r)
    // })
  }
}

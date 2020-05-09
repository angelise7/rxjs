import { Injectable } from '@angular/core';
import { of, interval } from 'rxjs';
import { combineLatest } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CombineLatestService {

  constructor() {

    /**
     *合并类操作符,会先订阅上游的所有Observable 然后吐出数据并存储,然后再订阅下游(最后一个)Observable
     *1.先订阅source1$和source2$,吐出3和'c';
     *2.再订阅source3$然后对数据进行合并和吐出
     */
    const source1$ = of(1, 2, 3);
    const source2$ = of('a', 'b', 'c');
    const source3$ = of('x', 'y');

    // const combineLatest$ = combineLatest(source1$, source2$)

    // combineLatest$.subscribe(r => {
    //   console.log(r)
    // })
    const combineLatest$ = source1$
      .pipe(
        combineLatest(source2$, source3$, this.project)
      )
      .subscribe(r => {
        console.log(r)
      })
  }

  project = (a, b, c) => `${a}+${b}+${c}`;
}

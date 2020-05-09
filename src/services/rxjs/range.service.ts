import { Injectable } from '@angular/core';
import { Observable, range } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RangeService {

  constructor() {
    const source$ = range(1.4, 5);
    source$.subscribe(r => {
      console.log(r)
    })
  }
}

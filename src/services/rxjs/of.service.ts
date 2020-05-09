import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OfService {

  constructor() {
    const source$ = of(1, 2, 3);
    source$.subscribe(r => {
      console.log(r)
    })
  }
}

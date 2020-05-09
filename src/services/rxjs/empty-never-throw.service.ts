import { Injectable } from '@angular/core';
import { empty, never, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmptyNeverThrowService {

  constructor() {
    const empty$ = empty()
    empty$.subscribe(r => {
      console.log(r)
    })

    const throwError$ = throwError(new Error('error'))
    throwError$.subscribe(null, e => {
      console.log(e)
    })

    const never$ = never()
  }
}

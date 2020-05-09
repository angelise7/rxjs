import { Injectable } from '@angular/core';
import { Observable, generate } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GenerateService {

  constructor() {
    const source$ = generate(
      2, // 初始值，相当于for循环中的i=2
      value => value < 10, //继续的条件，相当于for中的条件判断 value => value + 2, //每次值的递增
      value => value * value // 产生的结果
    );

    source$.subscribe(r => {
      console.log(r)
    })
  }
}

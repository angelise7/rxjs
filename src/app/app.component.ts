import { Component } from '@angular/core';
import { CREATE_OPERATOR, COMBINATION_OPERATOR, OPERATOR } from '../services/const-data/const-data'
import {
  OfService,
  RangeService,
  GenerateService,
  RepeatService,
  EmptyNeverThrowService,
  IntervalTimerService,
  FromService,
  DeferService,
  ConcatService,
} from '../services/rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  createOperator: Array<OPERATOR> = CREATE_OPERATOR;
  combinationOperator: Array<OPERATOR> = COMBINATION_OPERATOR;

  constructor(
    private concatService: ConcatService,
  ) {
  }

  ngOnInit(): void {
  }

  handleOperation(): void {
    // this.deferService.operation().subscribe(r => {
    //   console.log(r)
    // })
  }
}

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
  MergeService,
  ZipService,
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
    private ZipService: ZipService,
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

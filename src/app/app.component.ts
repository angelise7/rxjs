import { Component } from '@angular/core';
import { CREATE_OPERATOR } from '../services/const-data/const-data'
import {
  OfService,
  RangeService,
  GenerateService,
  RepeatService,
  EmptyNeverThrowService,
  IntervalTimerService,
} from '../services/rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  createOperator = CREATE_OPERATOR;

  constructor(
    intervalTimerService: IntervalTimerService,
  ) {

  }

  ngOnInit(): void {

  }
}

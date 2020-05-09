import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';

import { AjaxService } from './ajax.service';
import { AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class DeferService {

  private source$: Observable<AjaxResponse>;

  constructor(
    private ajaxService: AjaxService,
  ) {
    this.source$ = defer(this.observableFactory)
  }

  operation(): Observable<AjaxResponse> {
    return this.source$
  }

  observableFactory = (): Observable<AjaxResponse> => {
    const url = 'https://testphpmallapi.zsis.net/index.php/tool/Task/getUnReadCount';
    const type = 'post';
    return this.ajaxService.ajaxJson(url, type)
  }

}

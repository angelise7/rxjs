import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor() {
    const url = 'https://testphpmallapi.zsis.net/index.php/tool/Task/getUnReadCount';
    const type = 'post';

    this.ajaxJson(url, type).subscribe(r => {
      console.log(r)
    })
  }


  ajaxJson(url, type, data = {}) {
    const config = {
      url: url,
      method: type,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': '9fb7m3xZzAgVs0MnbKextveojOj3FMbZ93NOE9GI'
      },
    }

    if (type === 'post') {
      config['body'] = JSON.stringify(data);
    }
    else if (type === 'get') {
      let ret = '?';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      ret = ret.substring(0, ret.length - 1);
      config.url += ret;
    }

    return ajax(config)
  }
}

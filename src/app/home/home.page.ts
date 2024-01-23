import { Component } from '@angular/core';

import { CapacitorHttp, HttpResponse } from '@capacitor/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  baseurl: string = 'https://reqres.in/api/users?page=2';
  apidata: any;
  viewmode: boolean = true;
  constructor() {
    this.getdata();
  }

  async getdata() {
    const options = {
      url: this.baseurl,
      headers: {},
      params: {},
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    this.apidata = response.data.data;
    console.log(this.apidata);

    // or...
    // const response = await CapacitorHttp.request({ ...options, method: 'GET' })

    console.log('called', response);
  }

  changemode(key: string) {
    if (key === 'grid') {
      this.viewmode = true;
    }
    if (key === 'list') {
      this.viewmode = false;
    }
  }
}

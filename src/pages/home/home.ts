import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  excusme: Observable<any>;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  this.excusme = this.httpClient.get("https://www.gkhair.com/getSection2?deviceType=IOS");
  this.excusme.subscribe(data=>{console.log('Servive Response: ', data)});
  }

}

import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-login',
  templateUrl: 'promotions.html',
})
export class PromotionsPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}

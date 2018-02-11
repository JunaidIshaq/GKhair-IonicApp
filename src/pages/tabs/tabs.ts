import { Component } from '@angular/core';

import { AccountPage } from "../account/account"
import { NotificationsPage } from "../notifications/notifications"
import { PromotionsPage} from "../promotions/promotions"
import { ProductsPage } from "../products/products"
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = PromotionsPage;
  tab4Root = NotificationsPage;
  tab5Root = AccountPage;

  constructor() {

  }
}

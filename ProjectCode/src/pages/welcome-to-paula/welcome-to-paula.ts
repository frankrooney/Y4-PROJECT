import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDetailsPage } from '../add-details/add-details';

@IonicPage()
@Component({
  selector: 'page-welcome-to-paula',
  templateUrl: 'welcome-to-paula.html',
})
export class WelcomeToPaulaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToAddDetailsPage() {

    this.navCtrl.push(AddDetailsPage);
  }

}

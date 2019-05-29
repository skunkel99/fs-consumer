import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


import { rental } from '../models/rentals.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public rentals: Array<rental> = new Array();

  constructor(private navCtrl: NavController) {
    let rental1 = new rental();
    rental1.destination = "Chicago, Illinois";
    rental1.housename = "Urban Loft";
    rental1.nightprice = 150;

    let rental2 = new rental();
    rental2.destination = "Rome, Italy";
    rental2.housename = "Rustic Villa";
    rental2.nightprice = 300;

    this.rentals.push(rental1);
    this.rentals.push(rental2);

  }

  navToRentalInfo() {
    this.navCtrl.navigateForward("rental-info");
  }

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }

}

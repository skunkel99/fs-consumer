import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


import { rental } from '../models/rentals.model';
import { RentalService } from '../services/rental.service';
import { RenderNodeAction } from '@angular/core/src/view/util';
import { readElementValue } from '@angular/core/src/render3/util';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public rentals: Array<rental> = new Array();

  constructor(private navCtrl: NavController, private rentalService: RentalService, private httpClient: HttpClient) {
    const id = localStorage.getItem("provider_id");
    this.httpClient.get(`http://localhost:3000/providers/${id}/properties`).subscribe((response) => {
      this.rentals = JSON.parse(JSON.stringify(response));
      for( var k = 0; k < this.rentals.length; k++) {
        this.rentals[0].imageUrl = response[0].imageUrl;
        this.rentals[0].houseName = response[0].houseName;
        this.rentals[0].hostName = response[0].hostName;
        this.rentals[0].location = response[0].location;
      }
    })
  }

  navToRentalInfo(Rental: rental) {
    this.navCtrl.navigateForward("rental-info", {
      queryParams: {
        q: "ionic",
        id: Rental.id,
      }
    });
  }

  navToNewRental() {
    this.navCtrl.navigateForward("new-rental");
  }

}

import { Component, OnInit } from '@angular/core';
import { rental } from '../models/rentals.model';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../services/rental.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'app-rental-info',
  templateUrl: './rental-info.page.html',
  styleUrls: ['./rental-info.page.scss'],
})
export class RentalInfoPage implements OnInit {

  private propertyId: number;
  public currentProperty: rental;
  public nameOfProperty: string;

  public bookings: Array<Booking> = new Array();

  constructor(
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private navCtrl: NavController, private httpClient: HttpClient
  ) { 
    this.rentalService.getAllRentals();


    
  } 

  accept(booking: Booking) {
    console.log(booking.status);
    booking.status = "ACCEPT";
  }

  reject(booking: Booking) {
    booking.status = "REJECT";
  }

  ngOnInit() {
    let arrow = (data: any) => {
      this.propertyId = data.params.id;
      var id = this.propertyId;

      this.httpClient.get(`http://localhost:3000/properties/${id}`).subscribe((response: any) => {
        this.currentProperty = response[0];
        if (this.currentProperty == null) {
          alert("Property not found!");
          this.navCtrl.navigateBack("");
        }
      })

      this.httpClient.get(`http://localhost:3000/properties/${id}/bookings`).subscribe((response: any) => {
      this.bookings = JSON.parse(JSON.stringify(response));
  })
    };
    this.activatedRoute.queryParamMap.subscribe(arrow);

  }


}

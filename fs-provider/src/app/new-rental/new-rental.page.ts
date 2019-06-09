import { Component, OnInit } from '@angular/core';
import { rental } from '../models/rentals.model';

import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-new-rental',
  templateUrl: './new-rental.page.html',
  styleUrls: ['./new-rental.page.scss'],
})
export class NewRentalPage implements OnInit {

  public Rental: rental = new rental();


  constructor(private httpClient: HttpClient) {
    const id = localStorage.getItem("provider_id");
    this.Rental.providerId = parseInt(id);
   }

  submit() {
    this.httpClient.post("http://localhost:3000/properties", this.Rental).subscribe((response) => {
     console.log(response);
     if (response == Error) {
       console.log("Incorrect password");
     }
    });
  }


  ngOnInit() {
  }

}

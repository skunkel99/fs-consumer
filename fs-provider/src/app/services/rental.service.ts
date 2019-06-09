import { Injectable } from '@angular/core';
import { rental } from '../models/rentals.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  public Rentals: Array<rental> = [];

  constructor(private httpClient: HttpClient) { }

  getAllRentals() {
    
    
  }
  findRentalById(id: number): rental {
    let foundRental: rental = null;

    this.Rentals.forEach(
      (rent: rental) => {
        if (rent.id == id) {
          foundRental = rent;
        }
      }
    );
    return foundRental;
  }
}

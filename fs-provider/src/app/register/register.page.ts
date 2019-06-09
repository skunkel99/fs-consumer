import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


import { HttpClient} from '@angular/common/http';
import { Provider } from '../models/provider.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public provider: Provider = new Provider();

  constructor(private navCtrl: NavController,  private httpClient: HttpClient) { 

    
  }

  submit() {
    console.log("Submitting to the server...");
    console.log(this.provider);

    this.httpClient
      .post("http://localhost:3000/providers", this.provider)
      .subscribe(
        (response : any) => {
          console.log(response);
          if (response == Error) {
            console.log("Account with email already exists");
          }
          else {
            const providerId = response.id;
            localStorage.setItem("provider_id", providerId);
            this.navCtrl.navigateForward("tabs");
          }
        }
      );
  }

  navToProfile() {
    this.navCtrl.navigateForward("tabs");
  }

  navToLogin() {
    this.navCtrl.navigateForward("");
  }
  ngOnInit() {
  }

}

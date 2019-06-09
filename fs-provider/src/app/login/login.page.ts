import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Provider } from '../models/provider.model';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public provider: Provider = new Provider();


  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) {}

  submit() {
    this.httpClient.post("http://localhost:3000/providers/authentication", this.provider).subscribe((response :any) => {

    const providerId = response.id;
    localStorage.setItem("provider_id", providerId);

    if (response == Error) {
      console.log("Incorrect Password");
    }
    else {
      this.navCtrl.navigateForward("tabs");
    }
  }
    )}

    navToRegister() {
      this.navCtrl.navigateForward("register");
    }
}




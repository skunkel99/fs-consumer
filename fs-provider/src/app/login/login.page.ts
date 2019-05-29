import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private navCtrl: NavController
  ) {}

  navToProfile() {
    this.navCtrl.navigateForward("tabs");
  }
}



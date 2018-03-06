import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  public createAccount() {
    this.navCtrl.push('RegisterPage');
  }

  public loginAccount() {
    this.navCtrl.push('LoPage');
  }

}

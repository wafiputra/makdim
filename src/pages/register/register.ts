import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
 
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }
 
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup("Regitrasi aku anda sudah berhasil. Silahkan lakukan aktivasi melalui email anda. Kemudian masuk kemabali lewat Facebook");
      } else {
        this.showPopup("Error", "Masalah pembuatan akun.");
      }
    },
      error => {
        this.showPopup("Error", error);
      });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
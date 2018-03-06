import { Component } from '@angular/core';
import { NavController ,AlertController,ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,) {

              }
  showAlert() {
    let alert = this.alertCtrl.create({
      message: 'Wifi',
      buttons: ['Tutup'],
      cssClass:'alert'
    });
    alert.present();
  }
  

}


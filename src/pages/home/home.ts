import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { InfoPage } from '../info/info';
import { expPage } from '../exp/exp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   slide1(){
  	this.navCtrl.push(InfoPage)
  }
   slide2(){
  	this.navCtrl.push(ContactPage)
  }
   slide3(){
  	this.navCtrl.push(TabsPage)
  }
  exp(){
    this.navCtrl.push(expPage)
  }

}

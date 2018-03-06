import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-exp',
  templateUrl: 'exp.html'
})
export class expPage {

  constructor(public navCtrl: NavController) {

  }

   slide1(){
  	this.navCtrl.push(AboutPage)
  }
   slide2(){
  	this.navCtrl.push(ContactPage)
  }
   slide3(){
  	this.navCtrl.push(TabsPage)
  }

}

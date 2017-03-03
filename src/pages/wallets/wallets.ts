import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Perfil,Medicion} from '../../database';

/*
  Generated class for the Wallets page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wallets',
  templateUrl: 'wallets.html'
})
export class WalletsPage {
  mediciones:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  loadTransactions(){
			Medicion.all()
			.then((data)  =>  {
			  this.mediciones=data;
			  console.log(this.mediciones);
			});
		 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletsPage');
    this.loadTransactions();

  }

}

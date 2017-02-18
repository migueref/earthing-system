import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Resistividad} from '../../database';

/*
  Generated class for the Suelo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suelo',
  templateUrl: 'suelo.html'
})
export class SueloPage {
  model:Resistividad;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model = new Resistividad(null,"",null);

  }
  save(){
    console.log("entrando")
    console.log(this.model)
		this.model.save()
	}

  ionViewDidLoad() {
    // let resistividad = new Resistividad(1,"vertical", 4.61,1,10,24.53);
		// resistividad.save();
    console.log('ionViewDidLoad SueloPage');
  }

}

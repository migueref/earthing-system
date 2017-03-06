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
  mediciones:any;
  mostrarMedicion:boolean=false;
  perfil:any;
  medicionGuardada:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  mostrarRegistro(medicion){
    // console.log("la medicion:")
    // console.log(medicion)
    this.mostrarMedicion=true;
    Perfil.getPerfil(medicion.id)
          .then((data)  =>  {
            this.perfil=new Perfil(data.no,
                                   data.idMedicion,
                                   data.orientacion,
                                   data.med1,
                                   data.med2,
                                   data.med3,
                                   data.med4,
                                   data.med5,
                                   data.res1,
                                   data.res2,
                                   data.res3,
                                   data.res4,
                                   data.res5,
                                   data.promedio);

          });
    //Get medicion info
    Medicion.getMedicion(medicion.id)
          .then((data)  =>  {
            this.medicionGuardada=data;
          });

  }
  eliminarRegistro(medicion:Medicion){

    this.mediciones= this.mediciones.filter(w=>{
      console.log(w.id)
		  return w.id!=medicion.id;

		});
    medicion.destroy();

  }
  mostrarLista(){
    this.mostrarMedicion=false;
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

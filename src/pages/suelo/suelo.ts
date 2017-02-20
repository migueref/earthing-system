import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Perfil} from '../../database';
import { ViewChild } from '@angular/core';
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

  model:Perfil;
  noPerfiles:number;
  profiles : any = [];
  perfil: any = [];
  orientacion: any = [];
  //definiendo slides

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model = new Perfil(null,"",null);

  }
  save(){
    console.log("entrando")
    console.log(this.model)
		this.model.save()
	}
  mostrarResultado(number){
    this.profiles[number].showR=true;
    console.log(this.profiles[number])
  }
  createprofileElements(number){
    this.noPerfiles=number;
    if(number==3){
      this.profiles = [
        {name:"perfil1",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
  			{name:"perfil2",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false}
  		];
    }
    if(number==4){
      this.profiles = [
        {name:"perfil1",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
  			{name:"perfil2",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
  			{name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false}
  		];
    }
    if(number==5){
      this.profiles = [
        {name:"perfil1",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
  			{name:"perfil2",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false},
  			{name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false}
  		];
    }


    console.log("number is"+number)
  }
  ionViewDidLoad() {
    // let resistividad = new Resistividad(1,"vertical", 4.61,1,10,24.53);
		// resistividad.save();
    console.log('ionViewDidLoad SueloPage');
  }

}

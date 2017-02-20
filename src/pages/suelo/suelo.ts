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
    console.log(this.profiles[number])
    this.profiles[number].res1=2*3.1416*1*this.profiles[number].med1;
    this.profiles[number].res2=2*3.1416*1.5*this.profiles[number].med2;
    this.profiles[number].res3=2*3.1416*2*this.profiles[number].med3;
    this.profiles[number].res4=2*3.1416*2.5*this.profiles[number].med4;
    this.profiles[number].res5=2*3.1416*3*this.profiles[number].med5;
    this.profiles[number].showR=true;
    this.profiles[number].promedio=(this.profiles[number].res1+this.profiles[number].res2+this.profiles[number].res3+this.profiles[number].res4+this.profiles[number].res5)/5;
    
  }
  createprofileElements(number){
    this.noPerfiles=number;
    if(number==3){
      this.profiles = [
        {name:"perfil1",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
  			{name:"perfil2",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0}
  		];
    }
    if(number==4){
      this.profiles = [
        {name:"perfil1",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
  			{name:"perfil2",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
  			{name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0}
  		];
    }
    if(number==5){
      this.profiles = [
        {name:"perfil1",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
  			{name:"perfil2",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
        {name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0},
  			{name:"perfil3",orientacion:"",med1:0,med2:0,med3:0,med4:0,med5:0,res1:0,res2:0,res3:0,res4:0,res5:0,showR:false,promedio:0}
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

import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import {Perfil} from '../../database';
import { ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import {InAppBrowser} from 'ionic-native';
import { ThemeableBrowser } from 'ionic-native';


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
  resistividad:number;
  rVarilla:number;
  rGrupo:number;
  nelectrodos:number;
  showRvarilla:boolean;
  rsuelo:number;
  rmax:number;
  platform: Platform

  //definiendo slides

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.model = new Perfil(null,"",null);
    this.showRvarilla=false;
    this.resistividad=0;

  }
  launch(){
    let options = {
     statusbar: {
         color: '#ffffffff'
     },
     toolbar: {
         height: 44,
         color: '#f0f0f0ff'
     },
     title: {
         color: '#003264ff',
         showPageTitle: true
     },
     backButton: {
         image: 'back',
         imagePressed: 'back_pressed',
         align: 'left',
         event: 'backPressed'
     },
     forwardButton: {
         image: 'forward',
         imagePressed: 'forward_pressed',
         align: 'left',
         event: 'forwardPressed'
     },
     closeButton: {
         image: 'close',
         imagePressed: 'close_pressed',
         align: 'left',
         event: 'closePressed'
     },
     customButtons: [
         {
             image: 'share',
             imagePressed: 'share_pressed',
             align: 'right',
             event: 'sharePressed'
         }
     ],
     menu: {
         image: 'menu',
         imagePressed: 'menu_pressed',
         title: 'Test',
         cancel: 'Cancel',
         align: 'right',
         items: [
             {
                 event: 'helloPressed',
                 label: 'Hello World!'
             },
             {
                 event: 'testPressed',
                 label: 'Test!'
             }
         ]
     },
     backButtonCanClose: true
    };

    let browser = new ThemeableBrowser('https://ionic.io', '_blank', options);

  }
  save(){
    console.log("entrando")
    console.log(this.model)
		this.model.save()
	}
  calcularRvarilla(){
    // De acuerdo a las norma TMX/N/CN/00/1001
    // Formula: ((p)/(2*pi*L))*(4L/d)
    let n2, n3, n4,n8, n12, n16, n20, n24,ncercano;
    for(var i=0;i<this.noPerfiles;i++){
      this.mostrarResultado(i);
      this.resistividad=this.resistividad+this.profiles[i].promedio;
    }
    this.resistividad=this.resistividad/this.noPerfiles;
    this.rVarilla=(this.resistividad/(2*3.1416*1.5))*Math.log((4*1.5/0.016))

    n2=this.rVarilla*0.580;
    n3=this.rVarilla*0.430;
    n4=this.rVarilla*0.340;
    n8=this.rVarilla*0.210;
    n12=this.rVarilla*0.150;
    n16=this.rVarilla*0.120;
    n20=this.rVarilla*0.100;
    n24=this.rVarilla*0.090;
    ncercano=0;
    if(n2>ncercano&&n2<=this.rmax){
      ncercano=n2;

      this.nelectrodos=2;
    }
    if(n3>ncercano&&n3<=this.rmax){
      ncercano=n3
      this.nelectrodos=3
    }
    if(n4>ncercano&&n4<=this.rmax){
      ncercano=n4
      this.nelectrodos=4
    }

    if(n8>ncercano&&n8<=this.rmax){
      ncercano=n8
      this.nelectrodos=8
    }

    if(n12>ncercano&&n12<=this.rmax){
      ncercano=n12
      this.nelectrodos=12
    }
    if(n16>ncercano&&n16<=this.rmax){
      ncercano=n16
      this.nelectrodos=16
    }
    if(n20>ncercano&&n20<=this.rmax){
      ncercano=n20
      this.nelectrodos=20
    }
    if(n24>ncercano&&n24<=this.rmax){
      ncercano=n24
      this.nelectrodos=24
    }
    this.rGrupo=ncercano;
    console.log(this.rGrupo);
    console.log("el numero electrodos es:"+this.nelectrodos);
    this.showRvarilla=true

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
  cambiarMaxima(){
    this.rVarilla=null;
    this.resistividad=null;
    this.showRvarilla=false;
  }
  generatePDF(){
    var rgrupo: string = String(this.rGrupo);
    var rvarilla: string = String(this.rVarilla);
    var nelectrodos: string = String(this.nelectrodos);
    var doc = new jsPDF();
    doc.text(20, 20, 'Valor RVarilla');
    doc.text(70, 20, rvarilla);
    doc.text(20, 30, 'Valor RGrupo');
    doc.text(65, 30, rgrupo);
    doc.text(20, 40, 'Número de electrodos');
    doc.text(80, 40, nelectrodos);
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // // Save the PDF
    // doc.save('rsuelo-report.pdf');
    // Show generated pdf file
      // Extract url from pdf binary file
      var pdfurl = doc.output('datauristring');
    let options = {
     statusbar: {
         color: '#ffffffff'
     },
     toolbar: {
         height: 44,
         color: '#f0f0f0ff'
     },
     title: {
         color: '#003264ff',
         showPageTitle: true
     },
     backButton: {
         image: 'back',
         imagePressed: 'back_pressed',
         align: 'left',
         event: 'backPressed'
     },
     forwardButton: {
         image: 'forward',
         imagePressed: 'forward_pressed',
         align: 'left',
         event: 'forwardPressed'
     },
     closeButton: {
         image: 'close',
         imagePressed: 'close_pressed',
         align: 'left',
         event: 'closePressed'
     },
     customButtons: [
         {
             image: 'share',
             imagePressed: 'share_pressed',
             align: 'right',
             event: 'sharePressed'
         }
     ],
     menu: {
         image: 'menu',
         imagePressed: 'menu_pressed',
         title: 'Test',
         cancel: 'Cancel',
         align: 'right',
         items: [
             {
                 event: 'helloPressed',
                 label: 'Hello World!'
             },
             {
                 event: 'testPressed',
                 label: 'Test!'
             }
         ]
     },
     backButtonCanClose: true
    };

    let browser = new ThemeableBrowser('https://docs.google.com/gview?embedded=true&url=' + encodeURIComponent(pdfurl) , '_blank', options);
  }
  ionViewDidLoad() {
    // let resistividad = new Resistividad(1,"vertical", 4.61,1,10,24.53);
		// resistividad.save();
    console.log('ionViewDidLoad SueloPage');

  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as jsPDF from 'jspdf';

/*
  Generated class for the Varilla page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-varilla',
  templateUrl: 'varilla.html'
})
export class VarillaPage {
  rsuelo:number;
  rmax:number;
  rVarilla:number;
  nelectrodos:number;
  rGrupo:number;
  showRvarilla:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showRvarilla=false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VarillaPage');
  }
  calcularRvarilla(){
    // De acuerdo a las norma TMX/N/CN/00/1001
    // Formula: ((p)/(2*pi*L))*(4L/d)
    let n2, n3, n4,n8, n12, n16, n20, n24,ncercano;

    this.rVarilla=(this.rsuelo/(2*3.1416*1.5))*Math.log((4*1.5/0.016))

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
      ncercano=n2

      this.nelectrodos=2;
    }
    if(n3>ncercano&&n3<=this.rmax){
      ncercano=n3
      this.nelectrodos=3
    }
    if(n4>ncercano&&n4<=this.rmax){
      ncercano=n4;
      this.nelectrodos=4
    }

    if(n8>ncercano&&n8<=this.rmax){
      ncercano=n8;
      this.nelectrodos=8
    }

    if(n12>ncercano&&n12<=this.rmax){
      ncercano=n12;
      this.nelectrodos=12
    }
    if(n16>ncercano&&n16<=this.rmax){
      ncercano=n16;
      this.nelectrodos=16
    }
    if(n20>ncercano&&n20<=this.rmax){
      ncercano=n20;
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
  nuevoCalculo(){
    this.showRvarilla=false;
    this.rmax=null;
    this.rsuelo=null;

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

    // Save the PDF
    doc.save('rvarilla-report.pdf');
  }
}

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//importing our views
import {SueloPage} from '../suelo/suelo';
import {VarillaPage} from '../varilla/varilla';
import {GrupoPage} from '../grupo/grupo';
//adding jsPDF to generate pdf reports
import * as jsPDF from 'jspdf';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  sueloPage = SueloPage;
  varillaPage = GrupoPage;
  grupoPage = VarillaPage;
  constructor(public navCtrl: NavController) {

  }
  download(){

        var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');

        // Save the PDF
        doc.save('Test.pdf');
  }
}

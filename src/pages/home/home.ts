import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {SueloPage} from '../suelo/suelo';
import {VarillaPage} from '../varilla/varilla';
import {GrupoPage} from '../grupo/grupo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sueloPage = SueloPage;
  varillaPage = GrupoPage;
  grupoPage = VarillaPage;
  constructor(public navCtrl: NavController) {

  }

}

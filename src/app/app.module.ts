import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SueloPage } from '../pages/suelo/suelo';
import { VarillaPage } from '../pages/varilla/varilla';
import { GrupoPage } from '../pages/grupo/grupo';
import { WalletsPage } from '../pages/wallets/wallets';
//Services
import { GeolocationService } from '../services/geolocation.service';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SueloPage,
    GrupoPage,
    VarillaPage,
    WalletsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SueloPage,
    GrupoPage,
    VarillaPage,
    WalletsPage
  ],
  providers: [GeolocationService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

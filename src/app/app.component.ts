import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {InscriptionPage} from "../pages/inscription/inscription";
import {MessagesPage} from "../pages/messages/messages";
import {AnnouncePage} from "../pages/announce/announce";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InscriptionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

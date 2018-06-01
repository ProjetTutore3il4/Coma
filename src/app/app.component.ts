import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {InscriptionPage} from "../pages/inscription/inscription";
import {MessagesPage} from "../pages/messages/messages";
import {AnnouncePage} from "../pages/announce/announce";
import {CommentsPage} from "../pages/comments/comments";
import {LoadingPage} from "../pages/loading/loading";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDr1LbVCD1CeaZyr2-kXN-CqZAVzrKkPks",
  authDomain: "coma-1525992359882.firebaseapp.com",
  databaseURL: "https://coma-1525992359882.firebaseio.com",
  projectId: "coma-1525992359882",
  storageBucket: "coma-1525992359882.appspot.com",
  messagingSenderId: "218637643887"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any= InscriptionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(config);
  }
}

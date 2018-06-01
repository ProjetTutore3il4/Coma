import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {InscriptionPage} from "../pages/inscription/inscription";
import {MessagesPage} from "../pages/messages/messages";
import {AnnouncePage} from "../pages/announce/announce";
import {LocationPage} from "../pages/location/location";
import {CommentsPage} from "../pages/comments/comments";
import {LoadingPage} from "../pages/loading/loading";

@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    AnnouncePage,
    LocationPage,
    TabsPage,
    LoginPage,
    InscriptionPage,
    CommentsPage,
    LoadingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    AnnouncePage,
    LocationPage,
    TabsPage,
    LoginPage,
    InscriptionPage,
    CommentsPage,
   LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

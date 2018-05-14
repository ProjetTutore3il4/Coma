import { Component } from '@angular/core';


import {AnnouncePage} from "../announce/announce";
import {MessagesPage} from "../messages/messages";
import {LocationPage} from "../location/location";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AnnouncePage;
  tab2Root = LocationPage;
  tab3Root = MessagesPage;

  constructor() {

  }
}

import { Component } from '@angular/core';
import {CommentsPage} from "../comments/comments";
import { NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../../../Coma/src/pages/tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  gotocomment(){
    this.navCtrl.push(CommentsPage);
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  select=0;
  tabs = [];
  constructor(public navCtrl: NavController) {
    this.tabs=[
      { key: '最新参与记录', id: 0, isSelect: true },
      { key: '最新获奖记录', id: 1, isSelect: false },
      { key: '揭晓记录',     id: 2, isSelect: false }
    ]

  }
  checktab(index: number) {
    console.log("index" + index);
    this.tabs.forEach(tab => {tab.isSelect=false});
    this.tabs[index].isSelect=true;
    this.select=index;
  }
}

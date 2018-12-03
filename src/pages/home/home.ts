import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  record_info_box=false;

  constructor(public navCtrl: NavController) {
    
   
  }

  showRecordInfoBox(){
    console.log('打开揭晓记录')
    this.record_info_box=true;
  }
  hideRecordInfoBox(){
    console.log('关闭揭晓记录')
    this.record_info_box=false;
  }

}

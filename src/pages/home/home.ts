import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';
import { GoodsinfoPage } from "../goodsinfo/goodsinfo";




// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  record_info_box=false;

  constructor(public navCtrl: NavController,public modalCtrl:ModalController,) {
    
   
  }

  showRecordInfoBox(){
    console.log('打开揭晓记录')
    this.record_info_box=true;
  }
  hideRecordInfoBox(){
    console.log('关闭揭晓记录')
    this.record_info_box=false;
  }

  // 商品详情
  goodsinfo(e){
    const modal = this.modalCtrl.create(GoodsinfoPage,{'title':'新增顾客','type':1});
    modal.onDidDismiss(data => {
      console.log(data);
      if(data.status==true){
        
      }else{
        console.log('取消操作')
      }
    });
    modal.present();
  }

}

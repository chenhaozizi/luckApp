import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the GoodsinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goodsinfo',
  templateUrl: 'goodsinfo.html',
})
export class GoodsinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsinfoPage');
  }
  // 确定
  dismiss(){
    let data = { 'status': true }
    this.viewCtrl.dismiss(data);
  }
  // 取消操作按钮
  cancel() {
    var data = { 'status': false }
    this.viewCtrl.dismiss(data);
  }

}

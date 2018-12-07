import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GoodsinfoPage } from "../goodsinfo/goodsinfo";
let self;




// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  record_info_box = false;
  interval;
  endtime = new Date().getTime() + 1800 * 1000;
  countdown = {
    minutes: '00',
    seconds: '00',
    Milliseconds: '00'
  }
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    self = this;
  }
  ionViewWillEnter() {
    this.CountDown();
  }

  showRecordInfoBox() {
    console.log('打开揭晓记录')
    this.record_info_box = true;
  }
  hideRecordInfoBox() {
    console.log('关闭揭晓记录')
    this.record_info_box = false;
  }
  // 商品详情
  goodsinfo(e) {
    const modal = this.modalCtrl.create(GoodsinfoPage, { 'title': '新增顾客', 'type': 1 });
    modal.onDidDismiss(data => {
      console.log(data);
      if (data.status == true) {

      } else {
        console.log('取消操作')
      }
    });
    modal.present();
  }

  CountDown() {
    this.interval = setInterval(function () {
      let end = self.endtime;
      let dat1 = new Date();
      let dat2 = (end - dat1.getTime()) / 1000;
      // console.log(dat1, dat2)
      if (dat2 >= 0) {
        self.countdown.minutes = Math.floor(dat2 / 60);
        if (self.countdown.minutes < 10) {
          self.countdown.minutes = '0' + self.countdown.minutes
        }
        self.countdown.seconds = Math.floor(dat2 % 60);
        if (self.countdown.seconds < 10) {
          self.countdown.seconds = '0' + self.countdown.seconds
        }
        self.countdown.Milliseconds = (dat2.toFixed(2).split('.')[1])
        if (self.countdown.Milliseconds < 10) {
          self.countdown.Milliseconds = '00';
        }
        let msg = "距离结束还有" + self.countdown.minutes + "分" + self.countdown.seconds + "秒" + self.countdown.Milliseconds + '毫秒';
        // console.log(msg)
      } else {
        console.log('计时结束');
        clearInterval(self.interval);
      }
    }, 99)
  }
}

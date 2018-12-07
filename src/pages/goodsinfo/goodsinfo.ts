import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  buyTypeNum: number = 1;  //购买单双类型
  buyNum;
  buyNum_input;//自主输入数量
  onInput = false;//是否在自主输入数量

  price: number = 4550;//单价
  num: number=5;//购买数量
  totalPrice: number;//总价
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.buyNum = [
      { num: 5, isPicked: true },
      { num: 10, isPicked: false },
      { num: 20, isPicked: false },
      { num: 30, isPicked: false },
      { num: 50, isPicked: false },
      { num: 80, isPicked: false },
      { num: 100, isPicked: false },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsinfoPage');
  }

  ngOnInit() {
    this.all_price();
  }
  // 确定
  dismiss() {
    let data = { 'status': true }
    this.viewCtrl.dismiss(data);
  }
  // 取消操作按钮
  cancel() {
    var data = { 'status': false }
    this.viewCtrl.dismiss(data);
  }
  // 购买类型
  buyType(buyType: number) {
    this.buyTypeNum = buyType
    console.log('单双类型 1单 2双：', this.buyTypeNum)
  }
  // 购买数量
  buyNumF(i: number) {
    console.log(i)
    this.buyNum_input = '';
    this.onInput = false;
    this.buyNumF2();
    this.buyNum[i].isPicked = true;
    console.log('选择的购买数量：', this.buyNum[i].num)
    console.log('输入的购买数量：', this.buyNum_input)
    this.num = this.buyNum[i].num;
    this.all_price();
  }
  // 选择数量失焦
  buyNumF2() {
    this.buyNum.forEach(buy => {
      buy.isPicked = false;
    });
  }
  //输入购买数量
  buyNum_inputF() {
    if(this.buyNum_input!==0&&this.buyNum_input!==''&&this.buyNum_input!==null){
      console.log('输入的购买数量：', this.buyNum_input=Math.ceil(this.buyNum_input))
      this.num = this.buyNum_input;
      this.all_price();
    }
  }
  // 开始输入购买数量
  onFocus() {
    this.buyNumF2();
    console.log('开始输入数量')
    this.onInput = true;
  }
  // 离开输入购买数量
  onBlur() {
    console.log('结束输入数量')
  }
  // 总价计算
  all_price(){
    this.totalPrice= this.num*this.price;
  }


}

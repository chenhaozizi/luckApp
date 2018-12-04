import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoodsinfoPage } from './goodsinfo';

@NgModule({
  declarations: [
    GoodsinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodsinfoPage),
  ],
})
export class GoodsinfoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavPage } from './nav';
import {EmailComposer} from "@ionic-native/email-composer";

@NgModule({
  declarations: [
    NavPage,
  ],
  imports: [
    IonicPageModule.forChild(NavPage),
  ],
  providers:[
    EmailComposer,
  ]
})
export class NavPageModule {}

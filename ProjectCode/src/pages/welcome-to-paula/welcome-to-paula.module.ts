import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeToPaulaPage } from './welcome-to-paula';

@NgModule({
  declarations: [
    WelcomeToPaulaPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeToPaulaPage),
  ],
})
export class WelcomeToPaulaPageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { WelcomeToPaulaPage } from '../pages/welcome-to-paula/welcome-to-paula';
import { AddDetailsPage } from '../pages/add-details/add-details';
//import { importExpr } from '@angular/compiler/src/output/output_ast';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

@NgModule({
  declarations: [
    MyApp,
    WelcomeToPaulaPage,
    AddDetailsPage 
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initalise Angularfire with credentials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomeToPaulaPage,
    AddDetailsPage 
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

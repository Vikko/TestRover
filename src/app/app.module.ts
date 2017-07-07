import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Rover } from '@ionic-native/rover';

import { TestRover } from './app.component';

@NgModule({
  declarations: [
    TestRover
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(TestRover)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TestRover
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Rover,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

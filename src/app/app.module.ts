import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorDetailProvider } from '../providers/error-detail/error-detail';

import { AccessCameraPage } from '../pages/access-camera/access-camera';
import {AddNotePage}  from '../pages/add-note/add-note';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import{FIREBASE_CONGIF} from '../app/firebase.config';
import { NoteListService } from '../service/note-list.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccessCameraPage,
    AddNotePage


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONGIF),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AccessCameraPage,
    AddNotePage


  ],
  providers: [
    StatusBar,
    HttpClient,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ErrorDetailProvider,
    NoteListService
    
  ]
})
export class AppModule {}

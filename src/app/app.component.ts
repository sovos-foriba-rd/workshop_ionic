import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Pro } from '@ionic/pro';
import { AccessCameraPage } from '../pages/access-camera/access-camera';
import { AddNotePage } from '../pages/add-note/add-note';
import {} from '../pages/edit-note/edit-note';


Pro.init('43df7a1d', {
  appVersion: 'APP_VERSION'
})

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Anasayfa', component: HomePage },
      { title: 'Hata Listesi', component: ListPage },
      {title:'camera',component: AccessCameraPage},
      {title:'Not Ekle',component:AddNotePage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  
  }
}

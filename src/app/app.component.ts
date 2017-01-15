import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
import { AlertPage } from '../pages/alert/alert';
import { ModalTestPage } from '../pages/modal-test/modal-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';

//import { ConnectionService } from '../pages/providers/connection-service/connection-service';


@Component({
  templateUrl: 'app.html'//,
  //providers:[ConnectionService]
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home,  icon: 'home' },
      { title: 'List', component: Page2,  icon: 'list' },
      { title: 'Alerta', component: AlertPage, icon: 'alert' },
      { title: 'Modal', component: ModalTestPage, icon: 'albums' },
      { title: 'CEP', component: GeneratedTestPage, icon: 'cafe' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

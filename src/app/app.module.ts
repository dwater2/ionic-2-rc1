import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
import { AlertPage } from '../pages/alert/alert';
import { ModalTestPage } from '../pages/modal-test/modal-test';
import { ModalLoginPage } from '../pages/modal-login/modal-login';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';

import { ConnectionService } from '../pages/providers/connection-service/connection-service';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Page2,
    AlertPage,
    ModalTestPage,
    ModalLoginPage,
    GeneratedTestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'bottom',
      platforms: {
        ios: {
          tabsPlacement: 'top',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Page2,
    AlertPage,
    ModalTestPage,
    ModalLoginPage,
    GeneratedTestPage    
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectionService
  ]
})
export class AppModule {}

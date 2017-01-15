import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login';


@Component({
  templateUrl: 'modal-test.html',
})
export class ModalTestPage {
  constructor(private nav: NavController, public modalCtrl: ModalController) {}

  abrirModal(){
    let modal = this.modalCtrl.create(ModalLoginPage, {
      action: {
        test: "Olá",
        value: true
      }
    });

    modal.onDidDismiss((param)=>{
      console.log(param);
    });
    modal.present();
  }
}

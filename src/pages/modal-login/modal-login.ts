import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'modal-login.html',
})
export class ModalLoginPage {

  user:any = {};

  constructor(private nav: NavController, public view: ViewController, public params: NavParams) {
    let action = params.get('action')
    console.log("Dados recebidos: Param: " + action.test + ", Value: "+ action.value);
  }

  logar(){

    this.view.dismiss(this.user);

  }

  close(){

    this.view.dismiss();
  }
}

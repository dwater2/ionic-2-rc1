import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'alert.html',
})
export class AlertPage {

  user: string = "";

  constructor(private nav: NavController, public altertCtrl: AlertController) {}

  alert(){
    let alert = this.altertCtrl.create({
      title: "Alert test",
      message: "Este é um exemplo de alert",
      buttons : ['Ok']
    });
    alert.present();
  }

  alertInputs(){
    let alertInputs = this.altertCtrl.create({
      title: 'Prompt',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Seu nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
      },
      {
        text: 'Ok',
        handler: (data) => {
          this.user = data.nome;
        }
      }
    ]
    });
    alertInputs.present();
  }

}

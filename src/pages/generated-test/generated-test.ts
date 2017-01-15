import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from '../providers/connection-service/connection-service';

@Component({
  templateUrl: 'generated-test.html'
})
export class GeneratedTestPage {

  data: any;

  constructor(private nav: NavController, private connectionSservice: ConnectionService) {}

  buscarCep() : void{
    this.connectionSservice.getCep("89116594").then((resp)=>{
      if(resp.status == 200){
        let json = resp.json();
        console.log(json);
        console.log(json.localidade);
      }else{
        console.log("Erro: " + resp);
      }
    }).catch((err)=>{
      console.log("Erro");
    });
  }

  getModas() : void{
    this.connectionSservice.getModas().then((resp)=>{
      if(resp.status == 200){
        let json = resp.json();
        this.data = json;
        console.log(json);
      }else{
        console.log("Erro: " + resp);
      }
    }).catch((err)=>{
      this.data = err;
      console.log("Erro");
    });
  }
}

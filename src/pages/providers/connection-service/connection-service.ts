import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConnectionService {
  data: any;
  param = {'cod_empresa': 1};
  baseUri: string = 'http://ec2-54-207-109-222.sa-east-1.compute.amazonaws.com:8089/catalogo/public/api';

  constructor(private http: Http) {
    this.data = null;
  }

  getCep(cep: string) : Promise<Response>{
    return this.http.get('https://viacep.com.br/ws/' + cep.trim() + '/json/').toPromise();
  }

  getModas() : Promise<Response>{
    let headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.baseUri = this.baseUri.replace("/api", "/catalogo/public/api");
      this.http.post(this.baseUri + "/modas/", JSON.stringify(this.param), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          console.log(data);
        }, error => {
          reject(error);
        });
    });

  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

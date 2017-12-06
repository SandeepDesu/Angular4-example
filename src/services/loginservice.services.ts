import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(public http:  Http) { }
  
    signIn(details){
      return this.http.post('https://<something>/api/v1/login', details)
                        .map((res:any) => res.json());
    }
    
}
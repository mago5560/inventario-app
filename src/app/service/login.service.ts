import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HOST, HOST_LOGIN, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";
import{UserToken} from "../model/userToken"
import { Session } from '../model/session';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    url: string = HOST_LOGIN;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    login(usuario:string,password:string): Observable<Session> {
        var _body = new HttpParams()
        .set("grant_type", 'password')
        .set("username", usuario)
        .set("password", password);

        
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8',  
           'Authorization': 'Basic ' + btoa(this.user + ":" + this.pass)
        })

        return this.http.post<Session>(this.url + '/oauth/token', _body.toString(), 
                         { headers: reqHeader });
    }

  }
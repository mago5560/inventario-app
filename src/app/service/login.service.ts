import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable,throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { HOST, HOST_LOGIN, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";
import{UserToken} from "../model/userToken"
import { Session } from '../model/session';
import { Error } from '../model/error';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    url: string = HOST_LOGIN;
    user: string = USERNAME;
    pass: string = PASSWORD;


    constructor(private http: HttpClient, private storageService: StorageService) {}

      // Handle API errors
  handleError(error: HttpErrorResponse) {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      //console.error("Ocurrio un error:", error.error.message);
      errorMessage = "Ocurrio un error:"+ error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      //console.error("Error retornado de Backend " + error.status + ", Cuerpo de error " + error.error);
        errorMessage = "Error retornado de Backend " + error.status + ", Cuerpo de error " + error.error
    }
    // return an observable with a user-facing error message
    //return throwError("Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.");
    return throwError(errorMessage);
  };


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
                         { headers: reqHeader }).pipe(retry(0), catchError(this.handleError));;
    }

  }
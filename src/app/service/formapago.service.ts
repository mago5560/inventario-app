import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormaPago } from "../model/formapago";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class FormaPagoService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<FormaPago[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<FormaPago[]>(`${this.url}/forma-pago`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<FormaPago>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<FormaPago>(`${this.url}/forma-pago/${id}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<FormaPago[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<FormaPago[]>(`${this.url}/forma-pago/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : FormaPago){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/forma-pago`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : FormaPago){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/forma-pago`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/forma-pago/${id}`, { headers: reqHeader })
      }
  }
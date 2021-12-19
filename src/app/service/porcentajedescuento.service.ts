import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PorcentajeDescuento } from "../model/porcentajedescuento";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class PorcentajeDescuentoService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<PorcentajeDescuento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<PorcentajeDescuento[]>(`${this.url}/porcentaje-descuento`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<PorcentajeDescuento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<PorcentajeDescuento>(`${this.url}/porcentaje-descuento/${id}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<PorcentajeDescuento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<PorcentajeDescuento[]>(`${this.url}/porcentaje-descuento/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : PorcentajeDescuento){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/porcentaje-descuento`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : PorcentajeDescuento){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/porcentaje-descuento`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/porcentaje-descuento/${id}`, { headers: reqHeader })
      }
  }
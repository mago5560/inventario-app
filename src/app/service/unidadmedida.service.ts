import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UnidadMedida } from "../model/unidadmedida";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class UnidadMedidaService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<UnidadMedida[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<UnidadMedida[]>(`${this.url}/unidad-medida`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<UnidadMedida>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<UnidadMedida>(`${this.url}/unidad-medida/${id}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<UnidadMedida[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<UnidadMedida[]>(`${this.url}/unidad-medida/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : UnidadMedida){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/unidad-medida`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : UnidadMedida){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/unidad-medida`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/unidad-medida/${id}`, { headers: reqHeader })
      }
  }
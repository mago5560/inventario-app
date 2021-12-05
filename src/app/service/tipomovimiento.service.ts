import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TipoMovimiento } from "../model/tipomovimiento";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";



@Injectable({
    providedIn: 'root'
  })
  export class TipoMovimientoService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<TipoMovimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoMovimiento[]>(`${this.url}/tipo-movimiento`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<TipoMovimiento>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoMovimiento>(`${this.url}/tipo-movimiento/${id}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<TipoMovimiento[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<TipoMovimiento[]>(`${this.url}/tipo-movimiento/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : TipoMovimiento){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/tipo-movimiento`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : TipoMovimiento){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/tipo-movimiento`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/tipo-movimiento/${id}`, { headers: reqHeader })
      }
  }
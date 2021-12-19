import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proveedor } from "../model/proveedor";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class ProveedorService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<Proveedor[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Proveedor[]>(`${this.url}/proveedor`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<Proveedor>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Proveedor>(`${this.url}/proveedor/${id}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<Proveedor[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Proveedor[]>(`${this.url}/proveedor/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : Proveedor){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/proveedor`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : Proveedor){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/proveedor`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/proveedor/${id}`, { headers: reqHeader })
      }
  }
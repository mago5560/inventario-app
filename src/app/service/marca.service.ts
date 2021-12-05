import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Marca } from "../model/marca";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class MarcaService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<Marca[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Marca[]>(`${this.url}/marca`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<Marca>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Marca>(`${this.url}/marca/${id}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<Marca[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<Marca[]>(`${this.url}/marca/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : Marca){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/marca`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : Marca){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/marca`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/marca/${id}`, { headers: reqHeader })
      }
  }
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Proveedor } from "../model/proveedor";
import { ProveedorLaboratorio } from "../model/proveedorlaboratorio";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class ProveedorLaboratorioService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<ProveedorLaboratorio[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProveedorLaboratorio[]>(`${this.url}/proveedor-lab`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<ProveedorLaboratorio>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProveedorLaboratorio>(`${this.url}/proveedor-lab/${id}`, { headers: reqHeader })
      }

      listarPorIdProveedor( id: number): Observable<ProveedorLaboratorio[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProveedorLaboratorio[]>(`${this.url}/proveedor-lab/proveedor/${id}`, { headers: reqHeader })
      }

      listarPorProveedorLaboratorio( idProveedor: number, idLab: number): Observable<ProveedorLaboratorio[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProveedorLaboratorio[]>(`${this.url}/proveedor-lab/idProveedor-Idlab/${idProveedor}/${idLab}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<ProveedorLaboratorio[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProveedorLaboratorio[]>(`${this.url}/proveedor-lab/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : ProveedorLaboratorio){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/proveedor-lab`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : ProveedorLaboratorio){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/proveedor-lab`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/proveedor-lab/${id}`, { headers: reqHeader })
      }
  }
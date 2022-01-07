import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductoSucursalSaldo } from "../model/productosucursalsaldo";
import { HOST, PASSWORD, USERNAME } from "../shared/var.constants";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class ProductoSucursalService {
    url: string = HOST;
    user: string = USERNAME;
    pass: string = PASSWORD;

    constructor(private http: HttpClient, private storageService: StorageService) {}


    
    listar(): Observable<ProductoSucursalSaldo[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProductoSucursalSaldo[]>(`${this.url}/producto-sucursal-saldo`, { headers: reqHeader })
    }

    listarPorId( id: number): Observable<ProductoSucursalSaldo>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProductoSucursalSaldo>(`${this.url}/producto-sucursal-saldo/${id}`, { headers: reqHeader })
      }

      listarDescripcion( descripcion: string): Observable<ProductoSucursalSaldo[]>{
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded;application/json; charset=utf-8'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.get<ProductoSucursalSaldo[]>(`${this.url}/producto-sucursal-saldo/descripcion-containing/${descripcion}`, { headers: reqHeader })
      }

      registrar(dato : ProductoSucursalSaldo){

        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
    
        return this.http.post(`${this.url}/producto-sucursal-saldo`, JSON.stringify(dato), { headers: reqHeader });
      }

      modificar(dato : ProductoSucursalSaldo){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.put(`${this.url}/producto-sucursal-saldo`,JSON.stringify(dato), { headers: reqHeader })
      }
    
      eliminar(id: number){
        var reqHeader = new HttpHeaders({
          'Content-Type': 'application/json'
           //,'Authorization': 'Bearer ' + this.storageService.getCurrentToken()
        })
        return this.http.delete(`${this.url}/producto-sucursal-saldo/${id}`, { headers: reqHeader })
      }
  }
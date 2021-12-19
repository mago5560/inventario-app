import { Laboratorio } from "./laboratorio";
import { Proveedor } from "./proveedor";

export class ProveedorLaboratorio{
    public idProveedorLaboratorio:number=0;
    public laboratorio:Laboratorio = new Laboratorio();
    public proveedor:Proveedor= new Proveedor();
}
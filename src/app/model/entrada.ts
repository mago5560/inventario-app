import { EntradaDetalle } from "./entradaDetalle";
import { ProveedorLaboratorio } from "./proveedorLaboratorio";
import { Sucursal } from "./sucursal";

export class Entrada{
    public entradaDetalle:EntradaDetalle[]=[];
    public fecha:string ="";
    public idEntrada:number=0;
    public proveedorLaboratorio:ProveedorLaboratorio=new ProveedorLaboratorio();
    public sucursal:Sucursal = new Sucursal();
    public total:number = 0;
}
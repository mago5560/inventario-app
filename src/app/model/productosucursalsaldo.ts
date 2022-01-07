import { Producto } from "./producto";
import { Sucursal } from "./sucursal";

export class ProductoSucursalSaldo{
    public fechaSaldo:string="";
    public idProductoSucursalSaldo:number=0;
    public producto:Producto=new Producto();
    public sucursal:Sucursal=new Sucursal();
    public saldo:number=0;
    public valorPromedio:number=0;
}
import { Producto } from "./producto";

export class EntradaDetalle{
    public idEntradaDetalle:number=0;
    public cantidad:number=0;
    public fechaVencimiento:string = "";
    public numeroLote:number=0;
    public producto:Producto = new Producto();
    public subTotal:number = 0;
    public valor:number = 0;
}
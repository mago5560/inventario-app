import { PorcentajeDescuento } from "./porcentajedescuento";
import { Producto } from "./producto";

export class ProductoDescuento{
    public idProductoDescuento:number=0;
    public porcentajeDescuento:PorcentajeDescuento = new PorcentajeDescuento();
    public producto:Producto= new Producto();

}
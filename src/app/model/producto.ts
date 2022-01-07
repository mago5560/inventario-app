import { Categoria } from "./categoria";
import { Marca } from "./marca";
import { PorcentajeDescuento } from "./porcentajedescuento";
import { Presentacion } from "./presentacion";
import { UnidadMedida } from "./unidadmedida";

export class Producto{
    public activo:boolean=true;
    public categoria:Categoria = new Categoria();
    public costo:number=0;
    public descripcion:string="";
    public idProducto:number=0;
    public marca:Marca = new Marca();
    public nombre:string="";
    public perecedero:boolean=true;
    public porcentajeDescuento:PorcentajeDescuento = new PorcentajeDescuento();
    public presentacion:Presentacion = new Presentacion();
    public rutaImagen:string="";
    public unidadMedida:UnidadMedida = new UnidadMedida();
    public file:File = null;
}
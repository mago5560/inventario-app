import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PorcentajeDescuento } from 'src/app/model/porcentajedescuento';
import { Producto } from 'src/app/model/producto';
import { ProductoDescuento } from 'src/app/model/productodescuento';
import { PorcentajeDescuentoService } from 'src/app/service/porcentajedescuento.service';
import { ProductoService } from 'src/app/service/producto.service';
import { ProductoDescuentoService } from 'src/app/service/productodescuento.service';

@Component({
  selector: 'app-productodescuentotecleo',
  templateUrl: './productodescuentotecleo.component.html',
  styleUrls: ['./productodescuentotecleo.component.scss']
})
export class ProductodescuentotecleoComponent implements OnInit {


  public cls:ProductoDescuento=new ProductoDescuento();
  public datosProducto: Producto[] = [];
  public datosPorcentajeDescuento: PorcentajeDescuento[] = [];

  public selectIdProducto:number=0;
  public selectIdPorcentajeDescuento:number=0;

  constructor(private service:ProductoDescuentoService,
     private serviceProducto: ProductoService,
     private servicePorcentajeDescuento: PorcentajeDescuentoService,
     private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fillCombos();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  

  }

  grabar(){

    if(this.selectIdProducto == 0 ){
      this.toastr.error("El campo Producto es requerido","Mensaje del sistema");
      return 
    }

    if(this.selectIdPorcentajeDescuento == 0 ){
      this.toastr.error("El campo Porcentaje Descuento es requerido","Mensaje del sistema");
      return 
    }
    
    this.cls.producto = this.datosProducto.find(c => c.idProducto == this.selectIdProducto);
    this.cls.porcentajeDescuento = this.datosPorcentajeDescuento.find(c => c.idPorcentajeDescuento == this.selectIdPorcentajeDescuento);

        if(this.cls.idProductoDescuento > 0){
          this.service.modificar(this.cls).subscribe(data=>{
            this.toastr.success("Registro creado correctamente", "Mensaje del Sistema");
            this.cerrar();
          })
        }else{
          this.service.registrar(this.cls).subscribe(data=>{
            this.toastr.success("Registro modificado correctamente", "Mensaje del Sistema");
            this.cerrar();
          })
        }
  }

  cerrar(){
    this.router.navigate(['/productodescuento'], { relativeTo: this.rutaActiva });
  }

  fillCombos(){
    this.serviceProducto.listar().subscribe(data=>{
      this.datosProducto = data;
    })

    this.servicePorcentajeDescuento.listar().subscribe(data=>{
      this.datosPorcentajeDescuento = data;
    })

  }

  obtenerDatos(id:number){

    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;   
        this.selectIdProducto = this.cls.producto.idProducto
        this.selectIdPorcentajeDescuento = this.cls.porcentajeDescuento.idPorcentajeDescuento
      })
    }

  }

}

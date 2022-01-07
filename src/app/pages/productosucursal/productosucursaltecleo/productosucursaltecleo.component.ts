import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/model/producto';
import { ProductoSucursalSaldo } from 'src/app/model/productosucursalsaldo';
import { Sucursal } from 'src/app/model/sucursal';
import { ProductoService } from 'src/app/service/producto.service';
import { ProductoSucursalService } from 'src/app/service/productosucursal.service';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-productosucursaltecleo',
  templateUrl: './productosucursaltecleo.component.html',
  styleUrls: ['./productosucursaltecleo.component.scss']
  ,providers:[DatePipe]
})
export class ProductosucursaltecleoComponent implements OnInit {


  public cls:ProductoSucursalSaldo=new ProductoSucursalSaldo();
  public datosProducto: Producto[] = [];
  public datosSucursal: Sucursal[] = [];

  public selectIdProducto:number=0;
  public selectIdSucursal:number=0;

  constructor(private service:ProductoSucursalService,
     private serviceProducto: ProductoService,
     private serviceSucursal: SucursalService,
     private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,  private  datePipe: DatePipe) { }

  ngOnInit(): void {
    this.fillCombos();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  

  }

  grabar(){


    if(this.selectIdProducto == 0 ){
      this.toastr.error("El campo Producto es requerido","Mensaje del sistema");
      return 
    }

    if(this.selectIdSucursal == 0 ){
      this.toastr.error("El campo Sucursal es requerido","Mensaje del sistema");
      return 
    }
    
    this.cls.producto = this.datosProducto.find(c => c.idProducto == this.selectIdProducto);
    this.cls.sucursal = this.datosSucursal.find(c => c.idSucursal == this.selectIdSucursal);
    this.cls.fechaSaldo = this.datePipe.transform(this.cls.fechaSaldo,"yyyy-MM-dd'T'HH:mm");

        if(this.cls.idProductoSucursalSaldo > 0){
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
    this.router.navigate(['/productosucursal'], { relativeTo: this.rutaActiva });
  }

  fillCombos(){
    this.serviceProducto.listar().subscribe(data=>{
      this.datosProducto = data;
    })

    this.serviceSucursal.listar().subscribe(data=>{
      this.datosSucursal = data;
    })

  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;   
        this.selectIdProducto = this.cls.producto.idProducto
        this.selectIdSucursal = this.cls.sucursal.idSucursal
        this.cls.fechaSaldo = this.datePipe.transform(this.cls.fechaSaldo,"yyyy-MM-dd") 
      })
    }else{
      this.cls.fechaSaldo = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    }
    
  }

}

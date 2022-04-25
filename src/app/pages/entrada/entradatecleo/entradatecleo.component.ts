import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Entrada } from 'src/app/model/entrada';
import { ProveedorLaboratorio } from 'src/app/model/proveedorlaboratorio';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Sucursal } from 'src/app/model/sucursal';
import { EntradaService } from 'src/app/service/entrada.service';
import { ProveedorLaboratorioService } from 'src/app/service/proveedorlaboratorio.service';
import { SucursalService } from 'src/app/service/sucursal.service';
import { EntradaDetalle } from 'src/app/model/entradadetalle';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-entradatecleo',
  templateUrl: './entradatecleo.component.html',
  styleUrls: ['./entradatecleo.component.scss']
  ,providers:[DatePipe,NgbModalConfig,NgbModal]
})

export class EntradatecleoComponent implements OnInit {

  public datosSucursal: Sucursal[] = [];
  public selectIdSucursal:number=0;

  public datosProveedorLaboratorio: ProveedorLaboratorio[]=[];
  public selectIdProveedorLaboratorio:number=0;

  public datosProducto: Producto[] = [];
  public selectIdProducto:number=0;


  public cls:Entrada=new Entrada();

  public _datos:EntradaDetalle[]=[];
  public IdDetalleIndex: number=0;
  public clsDetalle:EntradaDetalle = new EntradaDetalle();

  constructor(private service:EntradaService,
    private serviceSucursal: SucursalService,
    private serviceProveedorLaboratorio: ProveedorLaboratorioService,
    private serviceProducto: ProductoService,
    private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,
    private config: NgbModalConfig,
    private modalService: NgbModal,
    private  datePipe: DatePipe) {

      config.backdrop = 'static';
      config.keyboard= false;

  }


  ngOnInit(): void {
    this.fillCombos();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
 
    if(this._datos.length > 0){
      this.cls.fecha = this.datePipe.transform(this.cls.fecha,"yyyy-MM-dd'T'HH:mm")

    }else{
      this.toastr.info("Se debe de grabar un articulo antes.", "Mensaje del Sistema"); 
    }

    /*
    if(this.cls.idProveedor > 0){
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
    */
  
  }

  cerrar(){
    this.router.navigate(['/entrada'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;      
        this._datos = data.entradaDetalle;
         this.cls.fecha = this.datePipe.transform(this.cls.fecha,"yyyy-MM-dd") 
      })
    }else{
      this.cls.fecha = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    }
    
  }



  buscar(){
    
    if(this.cls.idEntrada >0){
      this.service.listarPorId(this.cls.idEntrada).subscribe(data =>{
        this._datos =[]
        this._datos = data.entradaDetalle; 
      })
    }else{
      
    }
  }

  calcularTotal(data:EntradaDetalle[]){
    data.forEach(element => {
      this.cls.total = 0;
      this.cls.total += element.cantidad * element.valor
    });
  }

  gabarDetalle(){
    this.serviceProducto.listarPorId(this.selectIdProducto).subscribe(data=>{
      this.clsDetalle.producto = data;
      //console.log(this.clsDetalle)
      this.clsDetalle.subTotal = this.clsDetalle.cantidad * this.clsDetalle.valor
      this._datos.push(this.clsDetalle)
      this.toastr.success("Registro Grabado", "Mensaje del Sistema"); 
      this.calcularTotal(this._datos)
      this.clsDetalle = new EntradaDetalle;
    })
  }


  modificarDetalle(data:EntradaDetalle){
    let index: number = this._datos.findIndex(c=> c == data);
    this.clsDetalle = this._datos[index];
  }

  openDialogFinalizar(modalFinalizarEntrega) {
    this.modalService.open(modalFinalizarEntrega, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      let selectSucursal = this.datosSucursal.find(c => c.idSucursal = this.selectIdSucursal);
      let selectProveedorLaboratorio = this.datosProveedorLaboratorio.find(c => c.idProveedorLaboratorio = this.selectIdProveedorLaboratorio)
      this.cls.sucursal = selectSucursal
      this.cls.proveedorLaboratorio = selectProveedorLaboratorio;

      this.cls.entradaDetalle = this._datos
      console.log(this.cls)
      this.service.registrar(this.cls).subscribe(data => {       
        this.toastr.success("Registro eliminado correctamente", "Mensaje del Sistema");
        this.cls.idEntrada = data.idEntrada;
        this.buscar();
      },error =>{
        console.log(error)
        this.toastr.error(error,"Mensaje del Sistema");
      })


    }, (reason) => {
      //Cerrar

    });
  }
  

  openDialogEliminar(modalEliminar,data:EntradaDetalle) {
    this.modalService.open(modalEliminar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      
      let index: number = this._datos.findIndex(c=> c == data);
      this._datos.splice(index,1);
      this.toastr.success("Registro eliminado correctamente", "Mensaje del Sistema");
      this.calcularTotal(this._datos)
    }, (reason) => {
      //Cerrar

    });
  }


  fillCombos(){

    this.serviceProveedorLaboratorio.listar().subscribe(data=>{
      this.datosProveedorLaboratorio = data;
      if(data){
        this.selectIdProveedorLaboratorio = this.datosProveedorLaboratorio[0].idProveedorLaboratorio
      }
    })


    this.serviceSucursal.listar().subscribe(data=>{
      this.datosSucursal = data;
      if (data){
        this.selectIdSucursal = this.datosSucursal[0].idSucursal
      }
    })

    this.serviceProducto.listar().subscribe(data=>{
      this.datosProducto = data;
    })
  }


}

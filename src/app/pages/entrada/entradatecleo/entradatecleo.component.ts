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
import { Proveedor } from 'src/app/model/proveedor';
import { Laboratorio } from 'src/app/model/laboratorio';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-entradatecleo',
  templateUrl: './entradatecleo.component.html',
  styleUrls: ['./entradatecleo.component.scss']
  ,providers:[DatePipe,NgbModalConfig,NgbModal]
})

export class EntradatecleoComponent implements OnInit {


  public datosSucursal: Sucursal[] = [];
  public selectIdSucursal:number=0;

  public datosProveedor: Proveedor[]=[];
  public selectIdProveedor:number=0;

  //public datosLaboratorio: Laboratorio[]=[];
  //public selectIdLaboratorio:number=0;

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
    private serviceProveedor: ProveedorService,
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
        console.log(this.cls)
        this._datos = data.entradaDetalle;
         this.cls.fecha = this.datePipe.transform(this.cls.fecha,"yyyy-MM-dd")
         this.selectIdSucursal = this.cls.sucursal.idSucursal
         this.selectIdProveedor = this.cls.proveedorLaboratorio.proveedor.idProveedor
         this.selectIdProveedorLaboratorio = this.cls.proveedorLaboratorio.idProveedorLaboratorio 
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
    if(this.validarDatos()){
      let selectProducto = this.datosProducto.find(c => c.idProducto = this.selectIdProducto);
      this.clsDetalle.producto = selectProducto;
      //console.log(this.clsDetalle)
      this.clsDetalle.subTotal = this.clsDetalle.cantidad * this.clsDetalle.valor
      this.clsDetalle.fechaVencimiento = this.datePipe.transform(this.clsDetalle.fechaVencimiento,"yyyy-MM-dd'T'HH:mm")
      this._datos.push(this.clsDetalle)
      this.toastr.success("Registro Grabado", "Mensaje del Sistema"); 
      this.calcularTotal(this._datos)
      this.clsDetalle = new EntradaDetalle;
    }
  
  }

  validarDatos(): boolean{

    if(this.selectIdProducto == 0){
      this.toastr.show("El campo producto es requerido","Mensaje del Sistema")
      return false;
    }

    if(this.clsDetalle.cantidad == 0){
      this.toastr.show("El campo cantidad debe de ser mayor a 0","Mensaje del Sistema")
      return false;
    }

    if(this.clsDetalle.valor == 0){
      this.toastr.show("El campo valor debe de ser mayor a 0","Mensaje del Sistema")
      return false;
    }

    if(!this.clsDetalle.fechaVencimiento){
      this.toastr.show("El campo fecha vencimiento es requerido","Mensaje del Sistema")
      return false;
    }

    if(this.clsDetalle.numeroLote == 0){
      this.toastr.show("El campo numero de lote es requerido.","Mensaje del Sistema")
      return false;
    }

    return true;
  }


  modificarDetalle(data:EntradaDetalle){
    let index: number = this._datos.findIndex(c=> c == data);
    this.clsDetalle = this._datos[index];
  }

  openDialogFinalizar(modalFinalizarEntrega) {
    this.modalService.open(modalFinalizarEntrega, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar

      if(this.selectIdProveedorLaboratorio > 0){
        let selectSucursal = this.datosSucursal.find(c => c.idSucursal = this.selectIdSucursal);
        let selectProveedorLaboratorio = this.datosProveedorLaboratorio.find(c => c.idProveedorLaboratorio = this.selectIdProveedorLaboratorio)
        this.cls.sucursal = selectSucursal
        this.cls.proveedorLaboratorio = selectProveedorLaboratorio;
        this.cls.entradaDetalle = this._datos
        this.cls.fecha =  this.datePipe.transform(this.cls.fecha,"yyyy-MM-dd'T'HH:mm")
        this.service.registrar(this.cls).subscribe(data => {       
          this.toastr.success("Registro grabado correctamente", "Mensaje del Sistema");
          this.cerrar()
        },error =>{
          console.log(error)
          this.toastr.error(error,"Mensaje del Sistema");
        })
      }else{
        this.toastr.error("Debe de seleccionar un Proveedor Laboratorio para finalizar","Mensaje del sistema")
      }
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

    this.serviceProveedor.listar().subscribe(data =>{
      this.datosProveedor = data;
      if (data){
        this.selectIdProveedor = this.datosProveedor[0].idProveedor
      }
    })

  }


  selectedChangeProveedor(){
    this.serviceProveedorLaboratorio.listarPorIdProveedor(this.selectIdProveedor).subscribe(data=>{
      this.datosProveedorLaboratorio = data;
      this.selectIdProveedorLaboratorio = 0;
      if(data){
        this.selectIdProveedorLaboratorio = this.datosProveedorLaboratorio[0].idProveedorLaboratorio
      }
    })
  }


}

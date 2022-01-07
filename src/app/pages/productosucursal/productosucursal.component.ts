import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductoSucursalSaldo } from 'src/app/model/productosucursalsaldo';
import { ProductoSucursalService } from 'src/app/service/productosucursal.service';

@Component({
  selector: 'app-productosucursal',
  templateUrl: './productosucursal.component.html',
  styleUrls: ['./productosucursal.component.scss']
})
export class ProductosucursalComponent implements OnInit {

  
  public _datos:ProductoSucursalSaldo[]=[];
  public _descripcion:string="";

  constructor(private service:ProductoSucursalService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buscar();
  }


  grabar(){
    this.router.navigate(['./tecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:ProductoSucursalSaldo){
    this.router.navigate(['./tecleo',data.idProductoSucursalSaldo], { relativeTo: this.rutaActiva });
  }

  
  openDialog(modalEliminar,data:ProductoSucursalSaldo) {
    this.modalService.open(modalEliminar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      this.service.eliminar(data.idProductoSucursalSaldo).subscribe(data => {       
        this.toastr.success("Registro eliminado correctamente", "Mensaje del Sistema");
        this.buscar();
      }) 
      
    }, (reason) => {
      //Cerrar

    });
  }


  buscar(){
    this._datos =[]
    if(this._descripcion != ""){
      this.service.listarDescripcion(this._descripcion).subscribe(data =>{
        this._datos=data;
        if(this._datos.length == 0){
          this.toastr.info("No se encontraro registos", "Mensaje del Sistema");
        }
      }, error=>{
        this.toastr.error("Ocurrio un problema al consulta por descripcion","Mensaje del sistema");
      })
    }else{
      this.service.listar().subscribe(data =>{
        this._datos=data;
        console.log(this._datos)
        if(this._datos.length == 0){
          this.toastr.info("No se encontraro registos", "Mensaje del Sistema");
        }
      }, error=>{
        this.toastr.error("Ocurrio un problema al consulta","Mensaje del sistema");
      })
    }
    
  }

}

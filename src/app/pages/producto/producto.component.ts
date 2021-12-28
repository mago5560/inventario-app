import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

 
  public _datos:Producto[]=[];
  public _descripcion:string="";

  constructor(private service:ProductoService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buscar();
  }


  grabar(){
    this.router.navigate(['./tecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Producto){
    this.router.navigate(['./tecleo',data.idProducto], { relativeTo: this.rutaActiva });
  }

  
  openDialog(modalEliminar,data:Producto) {
    this.modalService.open(modalEliminar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      this.service.eliminar(data.idProducto).subscribe(data => {       
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

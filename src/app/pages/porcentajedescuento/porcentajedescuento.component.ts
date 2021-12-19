import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PorcentajeDescuento } from 'src/app/model/porcentajedescuento';
import { PorcentajeDescuentoService } from 'src/app/service/porcentajedescuento.service';

@Component({
  selector: 'app-porcentajedescuento',
  templateUrl: './porcentajedescuento.component.html',
  styleUrls: ['./porcentajedescuento.component.scss']
})
export class PorcentajedescuentoComponent implements OnInit {

 
  public _datos:PorcentajeDescuento[]=[];
  public _descripcion:string="";

  constructor(private service:PorcentajeDescuentoService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buscar();
  }


  grabar(){
    this.router.navigate(['./tecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:PorcentajeDescuento){
    this.router.navigate(['./tecleo',data.idPorcentajeDescuento], { relativeTo: this.rutaActiva });
  }

  
  openDialog(modalEliminar,data:PorcentajeDescuento) {
    this.modalService.open(modalEliminar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      this.service.eliminar(data.idPorcentajeDescuento).subscribe(data => {       
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
        if(this._datos.length == 0){
          this.toastr.info("No se encontraro registos", "Mensaje del Sistema");
        }
      }, error=>{
        this.toastr.error("Ocurrio un problema al consulta","Mensaje del sistema");
      })
    }
    
  }

}

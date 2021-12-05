import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UnidadMedida } from 'src/app/model/unidadmedida';
import { UnidadMedidaService } from 'src/app/service/unidadmedida.service';

@Component({
  selector: 'app-unidadmedida',
  templateUrl: './unidadmedida.component.html',
  styleUrls: ['./unidadmedida.component.scss']
})
export class UnidadmedidaComponent implements OnInit {

  
  public _datos:UnidadMedida[]=[];
  public _descripcion:string="";

  constructor(private service:UnidadMedidaService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buscar();
  }


  grabar(){
    this.router.navigate(['./tecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:UnidadMedida){
    this.router.navigate(['./tecleo',data.idUnidadMedida], { relativeTo: this.rutaActiva });
  }

  
  openDialog(modalEliminar,data:UnidadMedida) {
    this.modalService.open(modalEliminar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      this.service.eliminar(data.idUnidadMedida).subscribe(data => {       
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
      })
    }else{
      this.service.listar().subscribe(data =>{
        this._datos=data;
        if(this._datos.length == 0){
          this.toastr.info("No se encontraro registos", "Mensaje del Sistema");
        }
      })
    }
    
  }
}

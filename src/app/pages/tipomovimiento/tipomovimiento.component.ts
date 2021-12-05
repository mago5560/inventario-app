import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TipoMovimiento } from 'src/app/model/tipomovimiento';
import { TipoMovimientoService } from 'src/app/service/tipomovimiento.service';

@Component({
  selector: 'app-tipomovimiento',
  templateUrl: './tipomovimiento.component.html',
  styleUrls: ['./tipomovimiento.component.scss']
})
export class TipomovimientoComponent implements OnInit {


  public _datos:TipoMovimiento[]=[];
  public _descripcion:string="";

  constructor(private service:TipoMovimientoService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buscar();
  }


  grabar(){
    this.router.navigate(['./tecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:TipoMovimiento){
    this.router.navigate(['./tecleo',data.idTipoMovimiento], { relativeTo: this.rutaActiva });
  }

  
  openDialog(modalEliminar,data:TipoMovimiento) {
    this.modalService.open(modalEliminar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      this.service.eliminar(data.idTipoMovimiento).subscribe(data => {       
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

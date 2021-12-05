import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/model/categoria';
import { Mensaje } from 'src/app/model/mensaje';
import { CategoriaService } from 'src/app/service/categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  public _datos:Categoria[]=[];
  public _descripcion:string="";
  closeResult = '';

  constructor(private service:CategoriaService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buscar();
  }


  grabar(){
    this.router.navigate(['./tecleo',0], { relativeTo: this.rutaActiva });
  }

  modificar(data:Categoria){
    this.router.navigate(['./tecleo',data.idCategoria], { relativeTo: this.rutaActiva });
  }

  
  openDialog(modalEliminar,data:Categoria) {
    this.modalService.open(modalEliminar, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //Aceptar
      this.service.eliminar(data.idCategoria).subscribe(data => {       
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

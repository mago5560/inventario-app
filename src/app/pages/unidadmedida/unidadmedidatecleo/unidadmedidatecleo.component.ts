import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UnidadMedida } from 'src/app/model/unidadmedida';
import { UnidadMedidaService } from 'src/app/service/unidadmedida.service';

@Component({
  selector: 'app-unidadmedidatecleo',
  templateUrl: './unidadmedidatecleo.component.html',
  styleUrls: ['./unidadmedidatecleo.component.scss']
})
export class UnidadmedidatecleoComponent implements OnInit {


  public cls:UnidadMedida=new UnidadMedida();
  constructor(private service:UnidadMedidaService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
    if(this.cls.idUnidadMedida > 0){
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
    this.router.navigate(['/unidadmedida'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}

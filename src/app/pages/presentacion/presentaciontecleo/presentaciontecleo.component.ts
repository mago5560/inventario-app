import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Presentacion } from 'src/app/model/presentacion';
import { PresentacionService } from 'src/app/service/presentacion.service';

@Component({
  selector: 'app-presentaciontecleo',
  templateUrl: './presentaciontecleo.component.html',
  styleUrls: ['./presentaciontecleo.component.scss']
})
export class PresentaciontecleoComponent implements OnInit {


  public cls:Presentacion=new Presentacion();
  constructor(private service:PresentacionService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
    if(this.cls.id > 0){
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
    this.router.navigate(['/presentacion'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}

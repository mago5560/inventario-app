import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormaPago } from 'src/app/model/formapago';
import { FormaPagoService } from 'src/app/service/formapago.service';

@Component({
  selector: 'app-formapagotecleo',
  templateUrl: './formapagotecleo.component.html',
  styleUrls: ['./formapagotecleo.component.scss']
})
export class FormapagotecleoComponent implements OnInit {


  public cls:FormaPago=new FormaPago();
  constructor(private service:FormaPagoService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
    if(this.cls.idFormaPago > 0){
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
    this.router.navigate(['/formapago'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}

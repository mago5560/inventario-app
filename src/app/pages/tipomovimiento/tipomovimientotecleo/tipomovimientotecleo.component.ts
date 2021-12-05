import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoMovimiento } from 'src/app/model/tipomovimiento';
import { TipoMovimientoService } from 'src/app/service/tipomovimiento.service';

@Component({
  selector: 'app-tipomovimientotecleo',
  templateUrl: './tipomovimientotecleo.component.html',
  styleUrls: ['./tipomovimientotecleo.component.scss']
})
export class TipomovimientotecleoComponent implements OnInit {

  public _movimientoSalida:boolean=false;
  public cls:TipoMovimiento=new TipoMovimiento();
  constructor(private service:TipoMovimientoService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
    if(this._movimientoSalida){
      this.cls.signo = -1
    }else{
      this.cls.signo = 1
    }

    if(this.cls.idTipoMovimiento > 0){
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
    this.router.navigate(['/tipomovimiento'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;      
        console.log(this.cls)
        if(this.cls.signo> 0){
          this._movimientoSalida = false;
        }else{
          this._movimientoSalida = true;
        }
      })
    }
    
  }

}

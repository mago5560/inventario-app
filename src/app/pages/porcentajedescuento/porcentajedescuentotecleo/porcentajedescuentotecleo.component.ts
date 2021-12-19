import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PorcentajeDescuento } from 'src/app/model/porcentajedescuento';
import { PorcentajeDescuentoService } from 'src/app/service/porcentajedescuento.service';

@Component({
  selector: 'app-porcentajedescuentotecleo',
  templateUrl: './porcentajedescuentotecleo.component.html',
  styleUrls: ['./porcentajedescuentotecleo.component.scss']
  ,providers:[DatePipe]
})
export class PorcentajedescuentotecleoComponent implements OnInit {

  
  public cls:PorcentajeDescuento=new PorcentajeDescuento();
  constructor(private service:PorcentajeDescuentoService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService, private  datePipe: DatePipe) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
    this.cls.fecha = this.datePipe.transform(this.cls.fecha,"yyyy-MM-dd'T'HH:mm")
    if(this.cls.idPorcentajeDescuento > 0){
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
    this.router.navigate(['/porcentajedescuento'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;     
        this.cls.fecha = this.datePipe.transform(this.cls.fecha,"yyyy-MM-dd") 
      })
    }else{
      this.cls.fecha = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    }
    
  }

}

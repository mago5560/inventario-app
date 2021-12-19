import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/model/proveedor';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-proveedortecleo',
  templateUrl: './proveedortecleo.component.html',
  styleUrls: ['./proveedortecleo.component.scss']
})
export class ProveedortecleoComponent implements OnInit {


  public cls:Proveedor=new Proveedor();
  constructor(private service:ProveedorService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
    if(this.cls.idProveedor > 0){
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
    this.router.navigate(['/proveedor'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}

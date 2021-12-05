import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/model/empresa';
import { Marca } from 'src/app/model/marca';
import { EmpresaService } from 'src/app/service/empresa.service';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-empresatecleo',
  templateUrl: './empresatecleo.component.html',
  styleUrls: ['./empresatecleo.component.scss']
})
export class EmpresatecleoComponent implements OnInit {

 
  public cls:Empresa=new Empresa();
  constructor(private service:EmpresaService,private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  
  }

  grabar(){
    if(this.cls.idEmpresa > 0){
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
    this.router.navigate(['/empresa'], { relativeTo: this.rutaActiva });
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;      
      })
    }
    
  }

}

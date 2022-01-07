import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/model/empresa';
import { Sucursal } from 'src/app/model/sucursal';
import { EmpresaService } from 'src/app/service/empresa.service';
import { SucursalService } from 'src/app/service/sucursal.service';

@Component({
  selector: 'app-sucursaltecleo',
  templateUrl: './sucursaltecleo.component.html',
  styleUrls: ['./sucursaltecleo.component.scss']
})
export class SucursaltecleoComponent implements OnInit {


  public cls:Sucursal=new Sucursal();
  public datosEmpresa: Empresa[] = [];
 

  public selectIdEmpresa:number=0;
  

  constructor(private service:SucursalService,
     private serviceEmpresa: EmpresaService,
     private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fillCombos();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  

  }

  grabar(){


    if(this.selectIdEmpresa == 0 ){
      this.toastr.error("El campo empresa es requerido","Mensaje del sistema");
      return 
    }
    
    this.cls.empresa = this.datosEmpresa.find(c => c.idEmpresa == this.selectIdEmpresa);
    
        if(this.cls.idSucursal > 0){
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
    this.router.navigate(['/sucursal'], { relativeTo: this.rutaActiva });
  }

  fillCombos(){
    this.serviceEmpresa.listar().subscribe(data=>{
      this.datosEmpresa = data;
    })
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;   
        this.selectIdEmpresa = this.cls.empresa.idEmpresa
      })
    }
    
  }

}

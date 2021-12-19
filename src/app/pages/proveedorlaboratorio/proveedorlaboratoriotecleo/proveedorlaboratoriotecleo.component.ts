import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Laboratorio } from 'src/app/model/laboratorio';
import { Proveedor } from 'src/app/model/proveedor';
import { ProveedorLaboratorio } from 'src/app/model/proveedorlaboratorio';
import { LaboratorioService } from 'src/app/service/laboratorio.service';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { ProveedorLaboratorioService } from 'src/app/service/proveedorlaboratorio.service';

@Component({
  selector: 'app-proveedorlaboratoriotecleo',
  templateUrl: './proveedorlaboratoriotecleo.component.html',
  styleUrls: ['./proveedorlaboratoriotecleo.component.scss']
})
export class ProveedorlaboratoriotecleoComponent implements OnInit {

 
  public cls:ProveedorLaboratorio=new ProveedorLaboratorio();
  public datosProveedor: Proveedor[] = [];
  public datosLaboratorio:Laboratorio[]=[];

  public selectProveedro:number=0;
  public selectLaboratorio:number=0;

  constructor(private service:ProveedorLaboratorioService,
     private serviceLaboratorio: LaboratorioService,
     private serviceProveedor: ProveedorService,
     private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fillCombos();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  

  }

  grabar(){


    if(this.selectLaboratorio == 0 ){
      this.toastr.error("El campo laboratorio es requerido","Mensaje del sistema");
      return 
    }
    if(this.selectProveedro == 0 ){
      this.toastr.error("El campo proveedor es requerido","Mensaje del sistema");
      return 
    }
    
    this.serviceLaboratorio.listarPorId(this.selectLaboratorio).subscribe(data => {
      this.cls.laboratorio = data;
      this.serviceProveedor.listarPorId(this.selectProveedro).subscribe(data => {
        this.cls.proveedor = data;
  
        if(this.cls.idProveedorLaboratorio > 0){
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

      })
    })

  
  
  }

  cerrar(){
    this.router.navigate(['/proveedorlaboratorio'], { relativeTo: this.rutaActiva });
  }

  fillCombos(){
    this.serviceProveedor.listar().subscribe(data=>{
      this.datosProveedor = data;
    })
    this.serviceLaboratorio.listar().subscribe(data=>{
      this.datosLaboratorio = data;
    })
  }
  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;   
        this.selectLaboratorio = this.cls.laboratorio.idLaboratorio
        this.selectProveedro = this.cls.proveedor.idProveedor   
      })
    }
    
  }

}

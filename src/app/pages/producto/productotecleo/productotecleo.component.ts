import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/model/categoria';
import { Marca } from 'src/app/model/marca';
import { PorcentajeDescuento } from 'src/app/model/porcentajedescuento';
import { Presentacion } from 'src/app/model/presentacion';
import { Producto } from 'src/app/model/producto';
import { UnidadMedida } from 'src/app/model/unidadmedida';
import { CategoriaService } from 'src/app/service/categoria.service';
import { MarcaService } from 'src/app/service/marca.service';
import { PorcentajeDescuentoService } from 'src/app/service/porcentajedescuento.service';
import { PresentacionService } from 'src/app/service/presentacion.service';
import { ProductoService } from 'src/app/service/producto.service';
import { UnidadMedidaService } from 'src/app/service/unidadmedida.service';
import { URL_IMG_DESTINO, URL_IMG_ORIGEN } from 'src/app/shared/var.constants';

@Component({
  selector: 'app-productotecleo',
  templateUrl: './productotecleo.component.html',
  styleUrls: ['./productotecleo.component.scss']
})
export class ProductotecleoComponent implements OnInit {

  public cls:Producto=new Producto();
  public datosCategoria:Categoria[]=[];
  public datosMarca:Marca[]=[];

  public datosUnidadMedida:UnidadMedida[]=[];
  public datosPorcentajeDescuento:PorcentajeDescuento[]=[];
  public datosPresentacion:Presentacion[]=[];

  public selectIdCategoria:number=0;
  public selectIdMarca:number=0;

  public selectIdUnidadMedida:number=0;
  public selectIdPorcentajeDescuento:number=0;
  public selectIdPresentacion:number=0;

  public selectedFile:File = null;
  public url:string  = "";
  public nameImage:string="";
  public saveImage: boolean = false;
  public changeImage:boolean = false;


  constructor(private service:ProductoService,
     private serviceCategoria: CategoriaService,
     private serviceMarca: MarcaService,
     private serviceUnidadMedida:UnidadMedidaService,
     private servicePorcentajeDescuento:PorcentajeDescuentoService,
     private servicePresentacion:PresentacionService,
     private router: Router,public rutaActiva: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fillCombos();
    this.obtenerDatos(this.rutaActiva.snapshot.params.Id);  

  }


  grabar(){

    if(this.selectIdCategoria == 0 ){
      this.toastr.error("El campo categoria es requerido","Mensaje del sistema");
      return 
    }
    if(this.selectIdMarca == 0 ){
      this.toastr.error("El campo marca es requerido","Mensaje del sistema");
      return 
    }

    if(this.selectIdUnidadMedida == 0 ){
      this.toastr.error("El campo Unidad es requerido","Mensaje del sistema");
      return 
    }

    if(this.selectIdPresentacion == 0 ){
      this.toastr.error("El campo Precentacion es requerido","Mensaje del sistema");
      return 
    }

    /*
    this.cls.categoria = this.datosCategoria.find(c => c.idCategoria == this.selectIdCategoria);
    this.cls.marca = this.datosMarca.find(c => c.idMarca == this.selectIdMarca);
    this.cls.unidadMedida =  this.datosUnidadMedida.find(c => c.idUnidadMedida == this.selectIdUnidadMedida);
    this.cls.porcentajeDescuento = this.datosPorcentajeDescuento.find(c => c.idPorcentajeDescuento == this.selectIdPorcentajeDescuento);
    this.cls.presentacion = this.datosPresentacion.find(c => c.id == this.selectIdPresentacion);
    */

    this.cls.file = this.selectedFile;

    let formData = new FormData();
 
    formData.append('activo',String(this.cls.activo));
    formData.append('categoria',String(this.selectIdCategoria));
    formData.append('costo',String(this.cls.costo));
    formData.append('descripcion',this.cls.descripcion);
    formData.append('idProducto',String(this.cls.idProducto));
    formData.append('marca',String(this.selectIdMarca));
    formData.append('nombre',this.cls.nombre);
    formData.append('perecedero',String(this.cls.perecedero));
    formData.append('porcentajeDescuento',String(this.selectIdPorcentajeDescuento));
    formData.append('presentacion',String(this.selectIdPresentacion));
    formData.append('rutaImagen', '' )
    formData.append('unidadMedida',String(this.selectIdUnidadMedida));

    if(!this.changeImage){
    console.log("put")  
      this.service.modificarFormData(formData).subscribe(data=>{
        this.toastr.success("Registro grabado correctamente", "Mensaje del Sistema");
        this.cerrar();
      })
    }else{
    formData.append('file',this.cls.file);
      if(this.selectedFile != undefined){
        console.log("post")      
        this.service.registrarFormData(formData).subscribe(data=>{
          this.toastr.success("Registro grabado correctamente", "Mensaje del Sistema");
          this.cerrar();
        })
      }else{
        this.toastr.error("Debe de seleccionar una imagen para este proceso" ,"Mensaje del Sistema");
      }
    }

    /*
    if(this.cls.idProducto > 0){
      this.service.modificarFormData(formData).subscribe(data=>{
        this.toastr.success("Registro creado correctamente", "Mensaje del Sistema");
        this.cerrar();
      })
    }else{
      this.service.registrarFormData(formData).subscribe(data=>{
        this.toastr.success("Registro modificado correctamente", "Mensaje del Sistema");
        this.cerrar();
      })
    }
    */

    /*
        if(this.cls.idProducto > 0){
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
    */
  }



  cerrar(){
    this.router.navigate(['/producto'], { relativeTo: this.rutaActiva });
  }

  fillCombos(){
    this.serviceCategoria.listar().subscribe(data=>{
      this.datosCategoria = data;
    })
    this.serviceMarca.listar().subscribe(data=>{
      this.datosMarca = data;
    })
    this.serviceUnidadMedida.listar().subscribe(data=>{
      this.datosUnidadMedida = data;
    })
    this.servicePorcentajeDescuento.listar().subscribe(data=>{
      this.datosPorcentajeDescuento = data;
    })
    this.servicePresentacion.listar().subscribe(data=>{
      this.datosPresentacion= data;
    })
  }

  obtenerDatos(id:number){
    if(id>0){
      this.service.listarPorId(id).subscribe(data =>{
        this.cls=data;
        if(this.cls.rutaImagen != ""){
          this.url = this.cls.rutaImagen.replace(URL_IMG_ORIGEN, URL_IMG_DESTINO)  
          this.saveImage= true; 
          this.changeImage=false;
        }
        this.selectIdCategoria = this.cls.categoria.idCategoria
        this.selectIdMarca = this.cls.marca.idMarca    
        this.selectIdUnidadMedida = this.cls.unidadMedida.idUnidadMedida
        console.log(this.cls.porcentajeDescuento)
        if(this.cls.porcentajeDescuento != null){
          this.selectIdPorcentajeDescuento = this.cls.porcentajeDescuento.idPorcentajeDescuento
        }
        this.selectIdPresentacion = this.cls.presentacion.id
      })
    }
    
  }


   onFileSelected(event){
    if(event.target.files){
      var reader = new FileReader()
      this.selectedFile = <File>event.target.files[0]
      reader.readAsDataURL(this.selectedFile)
      reader.onload=(event:any)=>{
        this.url = event.target.result
        //this.nameImage = this.selectedFile.name
        this.saveImage = true;
        this.changeImage = true;
      }
    }
  }

  removeUpload(){
    this.selectedFile = null;
    this.url = ""
    this.nameImage = ""
    this.saveImage = false;
  }
}

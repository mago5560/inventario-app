import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { AuthorizationGuard } from 'src/app/guards/authorization.guard';
import { CategoriaComponent } from 'src/app/pages/categoria/categoria.component';
import { CategoriatecleoComponent } from 'src/app/pages/categoria/categoriatecleo/categoriatecleo.component';
import { EmpresaComponent } from 'src/app/pages/empresa/empresa.component';
import { EmpresatecleoComponent } from 'src/app/pages/empresa/empresatecleo/empresatecleo.component';
import { FormapagoComponent } from 'src/app/pages/formapago/formapago.component';
import { FormapagotecleoComponent } from 'src/app/pages/formapago/formapagotecleo/formapagotecleo.component';
import { MarcaComponent } from 'src/app/pages/marca/marca.component';
import { MarcatecleoComponent } from 'src/app/pages/marca/marcatecleo/marcatecleo.component';
import { PresentacionComponent } from 'src/app/pages/presentacion/presentacion.component';
import { PresentaciontecleoComponent } from 'src/app/pages/presentacion/presentaciontecleo/presentaciontecleo.component';
import { TipomovimientoComponent } from 'src/app/pages/tipomovimiento/tipomovimiento.component';
import { TipomovimientotecleoComponent } from 'src/app/pages/tipomovimiento/tipomovimientotecleo/tipomovimientotecleo.component';
import { UnidadmedidaComponent } from 'src/app/pages/unidadmedida/unidadmedida.component';
import { UnidadmedidatecleoComponent } from 'src/app/pages/unidadmedida/unidadmedidatecleo/unidadmedidatecleo.component';
import { ClienteComponent } from 'src/app/pages/cliente/cliente.component';
import { ClientetecleoComponent } from 'src/app/pages/cliente/clientetecleo/clientetecleo.component';
import { ProveedorComponent } from 'src/app/pages/proveedor/proveedor.component';
import { ProveedortecleoComponent } from 'src/app/pages/proveedor/proveedortecleo/proveedortecleo.component';
import { LaboratorioComponent } from 'src/app/pages/laboratorio/laboratorio.component';
import { LaboratoriotecleoComponent } from 'src/app/pages/laboratorio/laboratoriotecleo/laboratoriotecleo.component';
import { PorcentajedescuentoComponent } from 'src/app/pages/porcentajedescuento/porcentajedescuento.component';
import { PorcentajedescuentotecleoComponent } from 'src/app/pages/porcentajedescuento/porcentajedescuentotecleo/porcentajedescuentotecleo.component';
import { ProveedorlaboratorioComponent } from 'src/app/pages/proveedorlaboratorio/proveedorlaboratorio.component';
import { ProveedorlaboratoriotecleoComponent } from 'src/app/pages/proveedorlaboratorio/proveedorlaboratoriotecleo/proveedorlaboratoriotecleo.component';
import { ProductoComponent } from 'src/app/pages/producto/producto.component';
import { ProductotecleoComponent } from 'src/app/pages/producto/productotecleo/productotecleo.component';
import { SucursalComponent } from 'src/app/pages/sucursal/sucursal.component';
import { SucursaltecleoComponent } from 'src/app/pages/sucursal/sucursaltecleo/sucursaltecleo.component';
import { ProductosucursalComponent } from 'src/app/pages/productosucursal/productosucursal.component';
import { ProductosucursaltecleoComponent } from 'src/app/pages/productosucursal/productosucursaltecleo/productosucursaltecleo.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'productosucursal',      canActivate: [AuthorizationGuard],   children:[{path:'', component:ProductosucursalComponent},{path:'tecleo/:Id',component:ProductosucursaltecleoComponent}]},
    { path: 'sucursal',      canActivate: [AuthorizationGuard],   children:[{path:'', component:SucursalComponent},{path:'tecleo/:Id',component:SucursaltecleoComponent}]},
    { path: 'producto',      canActivate: [AuthorizationGuard],   children:[{path:'', component:ProductoComponent},{path:'tecleo/:Id',component:ProductotecleoComponent}]},
    { path: 'cliente',      canActivate: [AuthorizationGuard],   children:[{path:'', component:ClienteComponent},{path:'tecleo/:Id',component:ClientetecleoComponent}]},
    { path: 'proveedor',      canActivate: [AuthorizationGuard],   children:[{path:'', component:ProveedorComponent},{path:'tecleo/:Id',component:ProveedortecleoComponent}]},
    { path: 'laboratorio',      canActivate: [AuthorizationGuard],   children:[{path:'', component:LaboratorioComponent},{path:'tecleo/:Id',component:LaboratoriotecleoComponent}]},
    { path: 'porcentajedescuento',      canActivate: [AuthorizationGuard],   children:[{path:'', component:PorcentajedescuentoComponent},{path:'tecleo/:Id',component:PorcentajedescuentotecleoComponent}]},
    { path: 'proveedorlaboratorio',      canActivate: [AuthorizationGuard],   children:[{path:'', component:ProveedorlaboratorioComponent},{path:'tecleo/:Id',component:ProveedorlaboratoriotecleoComponent}]},
    { path: 'categoria',      canActivate: [AuthorizationGuard],   children:[{path:'', component:CategoriaComponent},{path:'tecleo/:Id',component:CategoriatecleoComponent}]},
    { path: 'empresa',      canActivate: [AuthorizationGuard],   children:[{path:'', component:EmpresaComponent},{path:'tecleo/:Id',component:EmpresatecleoComponent}]},
    { path: 'formapago',      canActivate: [AuthorizationGuard],   children:[{path:'', component:FormapagoComponent},{path:'tecleo/:Id',component:FormapagotecleoComponent}]},
    { path: 'marca',      canActivate: [AuthorizationGuard],   children:[{path:'', component:MarcaComponent},{path:'tecleo/:Id',component:MarcatecleoComponent}]},
    { path: 'presentacion',      canActivate: [AuthorizationGuard],   children:[{path:'', component:PresentacionComponent},{path:'tecleo/:Id',component:PresentaciontecleoComponent}]},
    { path: 'tipomovimiento',      canActivate: [AuthorizationGuard],   children:[{path:'', component:TipomovimientoComponent},{path:'tecleo/:Id',component:TipomovimientotecleoComponent}]},
    { path: 'unidadmedida',      canActivate: [AuthorizationGuard],   children:[{path:'', component:UnidadmedidaComponent},{path:'tecleo/:Id',component:UnidadmedidatecleoComponent}]},
    
    { path: 'dashboard',      canActivate: [AuthorizationGuard],   component: DashboardComponent }
];

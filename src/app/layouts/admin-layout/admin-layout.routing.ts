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

export const AdminLayoutRoutes: Routes = [
    { path: 'categoria',      canActivate: [AuthorizationGuard],   children:[{path:'', component:CategoriaComponent},{path:'tecleo/:Id',component:CategoriatecleoComponent}]},

    { path: 'empresa',      canActivate: [AuthorizationGuard],   children:[{path:'', component:EmpresaComponent},{path:'tecleo/:Id',component:EmpresatecleoComponent}]},
    { path: 'formapago',      canActivate: [AuthorizationGuard],   children:[{path:'', component:FormapagoComponent},{path:'tecleo/:Id',component:FormapagotecleoComponent}]},
    { path: 'marca',      canActivate: [AuthorizationGuard],   children:[{path:'', component:MarcaComponent},{path:'tecleo/:Id',component:MarcatecleoComponent}]},
    { path: 'presentacion',      canActivate: [AuthorizationGuard],   children:[{path:'', component:PresentacionComponent},{path:'tecleo/:Id',component:PresentaciontecleoComponent}]},
    { path: 'tipomovimiento',      canActivate: [AuthorizationGuard],   children:[{path:'', component:TipomovimientoComponent},{path:'tecleo/:Id',component:TipomovimientotecleoComponent}]},
    { path: 'unidadmedida',      canActivate: [AuthorizationGuard],   children:[{path:'', component:UnidadmedidaComponent},{path:'tecleo/:Id',component:UnidadmedidatecleoComponent}]},
    
    { path: 'dashboard',      canActivate: [AuthorizationGuard],   component: DashboardComponent }
];

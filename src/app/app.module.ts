import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { JwtModule } from '@auth0/angular-jwt';
import { TOKEN_NAME } from './shared/var.constants';
import { environment } from 'src/environments/environment';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CategoriatecleoComponent } from './pages/categoria/categoriatecleo/categoriatecleo.component';

import { ToastrModule } from 'ngx-toastr';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EmpresatecleoComponent } from './pages/empresa/empresatecleo/empresatecleo.component';
import { FormapagoComponent } from './pages/formapago/formapago.component';
import { FormapagotecleoComponent } from './pages/formapago/formapagotecleo/formapagotecleo.component';
import { MarcaComponent } from './pages/marca/marca.component';
import { MarcatecleoComponent } from './pages/marca/marcatecleo/marcatecleo.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { PresentaciontecleoComponent } from './pages/presentacion/presentaciontecleo/presentaciontecleo.component';
import { TipomovimientoComponent } from './pages/tipomovimiento/tipomovimiento.component';
import { TipomovimientotecleoComponent } from './pages/tipomovimiento/tipomovimientotecleo/tipomovimientotecleo.component';
import { UnidadmedidaComponent } from './pages/unidadmedida/unidadmedida.component';
import { UnidadmedidatecleoComponent } from './pages/unidadmedida/unidadmedidatecleo/unidadmedidatecleo.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClientetecleoComponent } from './pages/cliente/clientetecleo/clientetecleo.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { ProveedortecleoComponent } from './pages/proveedor/proveedortecleo/proveedortecleo.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { LaboratoriotecleoComponent } from './pages/laboratorio/laboratoriotecleo/laboratoriotecleo.component';
import { PorcentajedescuentoComponent } from './pages/porcentajedescuento/porcentajedescuento.component';
import { PorcentajedescuentotecleoComponent } from './pages/porcentajedescuento/porcentajedescuentotecleo/porcentajedescuentotecleo.component';
import { ProveedorlaboratorioComponent } from './pages/proveedorlaboratorio/proveedorlaboratorio.component';
import { ProveedorlaboratoriotecleoComponent } from './pages/proveedorlaboratorio/proveedorlaboratoriotecleo/proveedorlaboratoriotecleo.component';

export function tokenGetter() {
  let tk = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
  let token = tk != null ? tk.access_token : '';
  return token;
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    JwtModule.forRoot({
      config: {
        tokenGetter : tokenGetter,
        allowedDomains: ['localhost:8080'],
      }
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ToastrModule.forRoot() // ToastrModule added
  ],
  declarations: [
    AppComponent,
    //se deben de borrar
    AdminLayoutComponent,
    AuthLayoutComponent,
    CategoriaComponent,
    CategoriatecleoComponent,
    EmpresaComponent,
    EmpresatecleoComponent,
    FormapagoComponent,
    FormapagotecleoComponent,
    MarcaComponent,
    MarcatecleoComponent,
    PresentacionComponent,
    PresentaciontecleoComponent,
    TipomovimientoComponent,
    TipomovimientotecleoComponent,
    UnidadmedidaComponent,
    UnidadmedidatecleoComponent,
    ClienteComponent,
    ClientetecleoComponent,
    ProveedorComponent,
    ProveedortecleoComponent,
    LaboratorioComponent,
    LaboratoriotecleoComponent,
    PorcentajedescuentoComponent,
    PorcentajedescuentotecleoComponent,
    ProveedorlaboratorioComponent,
    ProveedorlaboratoriotecleoComponent
    //cuando se controle todo
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

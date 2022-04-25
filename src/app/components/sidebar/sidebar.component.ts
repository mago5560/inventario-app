import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni ni-tv-2 text-primary', class: '' },
    { path: '/entrada', title: 'Entradas',  icon:'bi bi-newspaper text-primary', class: '' },
    { path: '/salidas', title: 'Salidas',  icon:'bi bi-cart-fill text-primary', class: '' },
    { path: '/producto', title: 'Producto',  icon:'bi bi-basket-fill text-primary', class: '' },
    { path: '/sucursal', title: 'Sucursal',  icon:'bi bi-shop text-primary', class: '' },
    { path: '/productosucursal', title: 'Producto Sucursal',  icon:'bi bi-shop-window text-primary', class: '' },
    { path: '/porcentajedescuento', title: 'Porcentaje Descuento',  icon:'bi bi-percent text-primary', class: '' },
    { path: '/productodescuento', title: 'Producto Descuento',  icon: 'bi bi-megaphone text-primary', class: '' },
    { path: '/cliente', title: 'Cliente',  icon:'bi bi-person-square text-primary', class: '' },
    { path: '/proveedor', title: 'Proveedor',  icon:'bi bi-person-square text-primary', class: '' },
    { path: '/laboratorio', title: 'Laboratorio',  icon:'bi bi-building text-primary', class: '' },
    { path: '/proveedorlaboratorio', title: 'Proveedor Laboratorio',  icon:'bi bi-file-earmark-person-fill text-primary', class: '' },
    { path: '/empresa', title: 'Empresa',  icon:'bi bi-building text-primary', class: '' },
    { path: '/formapago', title: 'Forma de Pago',  icon:'bi bi-currency-exchange text-primary', class: '' },
    { path: '/marca', title: 'Marca',  icon:'bi bi-bookmark-check-fill text-primary', class: '' },
    { path: '/presentacion', title: 'Presentación',  icon:'bi bi-file-earmark-richtext-fill text-primary', class: '' },
    { path: '/tipomovimiento', title: 'Tipo de Movimiento',  icon:'bi bi-filetype-mov text-primary', class: '' },
    { path: '/unidadmedida', title: 'Unidad de Medida',  icon:'bi bi-rulers text-primary', class: '' },
    { path: '/categoria', title: 'Categoria',  icon:'bi bi-diagram-3-fill text-primary', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  public location: Location;
  public installEvent:any = null

  constructor(private router: Router,public storageService: StorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   console.log("variable null " + this.installEvent)
  }

  @HostListener('window:beforeinstallprompt',['$event'])
  onBeforeInstallPrompt(event:Event){
    console.log('before install prompt')
    console.log(event)
    event.preventDefault()
    this.installEvent = event
  }

  installByUser(){
    if(this.installEvent) {
      this.installEvent.prompt()
      this.installEvent.userChoice
        .then(rta => {
          console.log(rta)
        })
    }
  }
}

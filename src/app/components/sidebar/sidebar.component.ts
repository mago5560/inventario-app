import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
  
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/producto', title: 'Producto',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/sucursal', title: 'Sucursal',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/productosucursal', title: 'Producto Sucursal',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/porcentajedescuento', title: 'Porcentaje Descuento',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/productodescuento', title: 'Producto Descuento',  icon: 'ni-bold-right text-primary', class: '' },
    { path: '/cliente', title: 'Cliente',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/proveedor', title: 'Proveedor',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/laboratorio', title: 'Laboratorio',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/proveedorlaboratorio', title: 'Proveedor Laboratorio',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/empresa', title: 'Empresa',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/formapago', title: 'Forma de Pago',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/marca', title: 'Marca',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/presentacion', title: 'Presentación',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/tipomovimiento', title: 'Tipo de Movimiento',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/unidadmedida', title: 'Unidad de Medida',  icon:'ni-bold-right text-primary', class: '' },
    { path: '/categoria', title: 'Categoria',  icon:'ni-bold-right text-primary', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,public storageService: StorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

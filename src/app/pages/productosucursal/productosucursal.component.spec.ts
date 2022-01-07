import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosucursalComponent } from './productosucursal.component';

describe('ProductosucursalComponent', () => {
  let component: ProductosucursalComponent;
  let fixture: ComponentFixture<ProductosucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

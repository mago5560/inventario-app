import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosucursaltecleoComponent } from './productosucursaltecleo.component';

describe('ProductosucursaltecleoComponent', () => {
  let component: ProductosucursaltecleoComponent;
  let fixture: ComponentFixture<ProductosucursaltecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosucursaltecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosucursaltecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductodescuentoComponent } from './productodescuento.component';

describe('ProductodescuentoComponent', () => {
  let component: ProductodescuentoComponent;
  let fixture: ComponentFixture<ProductodescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductodescuentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductodescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

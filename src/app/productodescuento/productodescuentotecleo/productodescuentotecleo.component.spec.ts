import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductodescuentotecleoComponent } from './productodescuentotecleo.component';

describe('ProductodescuentotecleoComponent', () => {
  let component: ProductodescuentotecleoComponent;
  let fixture: ComponentFixture<ProductodescuentotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductodescuentotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductodescuentotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajedescuentoComponent } from './porcentajedescuento.component';

describe('PorcentajedescuentoComponent', () => {
  let component: PorcentajedescuentoComponent;
  let fixture: ComponentFixture<PorcentajedescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajedescuentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajedescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajedescuentotecleoComponent } from './porcentajedescuentotecleo.component';

describe('PorcentajedescuentotecleoComponent', () => {
  let component: PorcentajedescuentotecleoComponent;
  let fixture: ComponentFixture<PorcentajedescuentotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajedescuentotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajedescuentotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomovimientoComponent } from './tipomovimiento.component';

describe('TipomovimientoComponent', () => {
  let component: TipomovimientoComponent;
  let fixture: ComponentFixture<TipomovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipomovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

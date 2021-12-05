import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomovimientotecleoComponent } from './tipomovimientotecleo.component';

describe('TipomovimientotecleoComponent', () => {
  let component: TipomovimientotecleoComponent;
  let fixture: ComponentFixture<TipomovimientotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipomovimientotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomovimientotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

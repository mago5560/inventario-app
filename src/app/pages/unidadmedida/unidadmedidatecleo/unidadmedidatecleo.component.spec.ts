import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadmedidatecleoComponent } from './unidadmedidatecleo.component';

describe('UnidadmedidatecleoComponent', () => {
  let component: UnidadmedidatecleoComponent;
  let fixture: ComponentFixture<UnidadmedidatecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadmedidatecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadmedidatecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

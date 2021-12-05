import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresatecleoComponent } from './empresatecleo.component';

describe('EmpresatecleoComponent', () => {
  let component: EmpresatecleoComponent;
  let fixture: ComponentFixture<EmpresatecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresatecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresatecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

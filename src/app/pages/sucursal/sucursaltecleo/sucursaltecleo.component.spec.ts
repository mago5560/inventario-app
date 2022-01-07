import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursaltecleoComponent } from './sucursaltecleo.component';

describe('SucursaltecleoComponent', () => {
  let component: SucursaltecleoComponent;
  let fixture: ComponentFixture<SucursaltecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucursaltecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursaltecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

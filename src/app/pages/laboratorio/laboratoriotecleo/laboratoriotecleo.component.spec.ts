import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriotecleoComponent } from './laboratoriotecleo.component';

describe('LaboratoriotecleoComponent', () => {
  let component: LaboratoriotecleoComponent;
  let fixture: ComponentFixture<LaboratoriotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoriotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoriotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

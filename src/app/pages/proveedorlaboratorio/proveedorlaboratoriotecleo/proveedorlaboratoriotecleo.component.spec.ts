import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorlaboratoriotecleoComponent } from './proveedorlaboratoriotecleo.component';

describe('ProveedorlaboratoriotecleoComponent', () => {
  let component: ProveedorlaboratoriotecleoComponent;
  let fixture: ComponentFixture<ProveedorlaboratoriotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorlaboratoriotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorlaboratoriotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

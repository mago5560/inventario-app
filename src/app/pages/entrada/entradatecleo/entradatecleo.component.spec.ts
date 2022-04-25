import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradatecleoComponent } from './entradatecleo.component';

describe('EntradatecleoComponent', () => {
  let component: EntradatecleoComponent;
  let fixture: ComponentFixture<EntradatecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradatecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradatecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

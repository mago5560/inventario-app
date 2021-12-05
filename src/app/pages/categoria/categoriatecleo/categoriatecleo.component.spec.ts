import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriatecleoComponent } from './categoriatecleo.component';

describe('CategoriatecleoComponent', () => {
  let component: CategoriatecleoComponent;
  let fixture: ComponentFixture<CategoriatecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriatecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriatecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

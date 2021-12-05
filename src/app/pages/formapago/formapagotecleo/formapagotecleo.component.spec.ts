import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagotecleoComponent } from './formapagotecleo.component';

describe('FormapagotecleoComponent', () => {
  let component: FormapagotecleoComponent;
  let fixture: ComponentFixture<FormapagotecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapagotecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapagotecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

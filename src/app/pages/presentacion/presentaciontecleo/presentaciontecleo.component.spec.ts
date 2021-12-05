import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentaciontecleoComponent } from './presentaciontecleo.component';

describe('PresentaciontecleoComponent', () => {
  let component: PresentaciontecleoComponent;
  let fixture: ComponentFixture<PresentaciontecleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentaciontecleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentaciontecleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

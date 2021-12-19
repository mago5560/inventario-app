import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorlaboratorioComponent } from './proveedorlaboratorio.component';

describe('ProveedorlaboratorioComponent', () => {
  let component: ProveedorlaboratorioComponent;
  let fixture: ComponentFixture<ProveedorlaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedorlaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorlaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

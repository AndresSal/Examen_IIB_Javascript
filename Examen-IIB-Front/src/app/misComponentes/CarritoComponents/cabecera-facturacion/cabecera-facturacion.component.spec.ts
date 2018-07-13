import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraFacturacionComponent } from './cabecera-facturacion.component';

describe('CabeceraFacturacionComponent', () => {
  let component: CabeceraFacturacionComponent;
  let fixture: ComponentFixture<CabeceraFacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraFacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

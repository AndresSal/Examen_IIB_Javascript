import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionMateriaEscogidaComponent } from './descripcion-materia-escogida.component';

describe('DescripcionMateriaEscogidaComponent', () => {
  let component: DescripcionMateriaEscogidaComponent;
  let fixture: ComponentFixture<DescripcionMateriaEscogidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionMateriaEscogidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionMateriaEscogidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

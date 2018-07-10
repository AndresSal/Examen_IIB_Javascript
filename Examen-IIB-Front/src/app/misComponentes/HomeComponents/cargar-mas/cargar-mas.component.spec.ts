import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarMasComponent } from './cargar-mas.component';

describe('CargarMasComponent', () => {
  let component: CargarMasComponent;
  let fixture: ComponentFixture<CargarMasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarMasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

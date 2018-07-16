import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstudianteComponent } from './modal-estudiante.component';

describe('ModalEstudianteComponent', () => {
  let component: ModalEstudianteComponent;
  let fixture: ComponentFixture<ModalEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

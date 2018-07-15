import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMateriaAuxiliarComponent } from './dmateria-auxiliar.component';

describe('DMateriaAuxiliarComponent', () => {
  let component: DMateriaAuxiliarComponent;
  let fixture: ComponentFixture<DMateriaAuxiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMateriaAuxiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMateriaAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

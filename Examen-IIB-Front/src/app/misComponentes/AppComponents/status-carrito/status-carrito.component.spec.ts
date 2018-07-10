import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCarritoComponent } from './status-carrito.component';

describe('StatusCarritoComponent', () => {
  let component: StatusCarritoComponent;
  let fixture: ComponentFixture<StatusCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

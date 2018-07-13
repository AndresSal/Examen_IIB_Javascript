import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontoTotalComponent } from './monto-total.component';

describe('MontoTotalComponent', () => {
  let component: MontoTotalComponent;
  let fixture: ComponentFixture<MontoTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontoTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

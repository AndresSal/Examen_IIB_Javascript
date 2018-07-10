import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPadreComponent } from './preview-padre.component';

describe('PreviewPadreComponent', () => {
  let component: PreviewPadreComponent;
  let fixture: ComponentFixture<PreviewPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

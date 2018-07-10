import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewHijoComponent } from './preview-hijo.component';

describe('PreviewHijoComponent', () => {
  let component: PreviewHijoComponent;
  let fixture: ComponentFixture<PreviewHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityFocusComponent } from './quality-focus.component';

describe('QualityFocusComponent', () => {
  let component: QualityFocusComponent;
  let fixture: ComponentFixture<QualityFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

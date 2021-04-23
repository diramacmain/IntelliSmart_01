import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesDifferenceComponent } from './utilities-difference.component';

describe('UtilitiesDifferenceComponent', () => {
  let component: UtilitiesDifferenceComponent;
  let fixture: ComponentFixture<UtilitiesDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilitiesDifferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingElaboratedComponent } from './offering-elaborated.component';

describe('OfferingElaboratedComponent', () => {
  let component: OfferingElaboratedComponent;
  let fixture: ComponentFixture<OfferingElaboratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingElaboratedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingElaboratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

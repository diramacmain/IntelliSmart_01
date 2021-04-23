import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelliFooterComponent } from './intelli-footer.component';

describe('IntelliFooterComponent', () => {
  let component: IntelliFooterComponent;
  let fixture: ComponentFixture<IntelliFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelliFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelliFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

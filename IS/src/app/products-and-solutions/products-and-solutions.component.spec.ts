import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAndSolutionsComponent } from './products-and-solutions.component';

describe('ProductsAndSolutionsComponent', () => {
  let component: ProductsAndSolutionsComponent;
  let fixture: ComponentFixture<ProductsAndSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAndSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAndSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

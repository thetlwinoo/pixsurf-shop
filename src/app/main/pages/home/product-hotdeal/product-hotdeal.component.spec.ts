import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHotdealComponent } from './product-hotdeal.component';

describe('ProductHotdealComponent', () => {
  let component: ProductHotdealComponent;
  let fixture: ComponentFixture<ProductHotdealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHotdealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHotdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

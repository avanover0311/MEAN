import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductseditComponent } from './productsedit.component';

describe('ProductseditComponent', () => {
  let component: ProductseditComponent;
  let fixture: ComponentFixture<ProductseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

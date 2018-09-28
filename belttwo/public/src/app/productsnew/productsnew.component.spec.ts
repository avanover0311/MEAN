import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsnewComponent } from './productsnew.component';

describe('ProductsnewComponent', () => {
  let component: ProductsnewComponent;
  let fixture: ComponentFixture<ProductsnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

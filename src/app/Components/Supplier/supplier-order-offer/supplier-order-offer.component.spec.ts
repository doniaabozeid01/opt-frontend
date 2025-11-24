import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOrderOfferComponent } from './supplier-order-offer.component';

describe('SupplierOrderOfferComponent', () => {
  let component: SupplierOrderOfferComponent;
  let fixture: ComponentFixture<SupplierOrderOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplierOrderOfferComponent]
    });
    fixture = TestBed.createComponent(SupplierOrderOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

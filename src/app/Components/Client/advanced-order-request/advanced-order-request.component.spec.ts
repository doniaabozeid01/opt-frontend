import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedOrderRequestComponent } from './advanced-order-request.component';

describe('AdvancedOrderRequestComponent', () => {
  let component: AdvancedOrderRequestComponent;
  let fixture: ComponentFixture<AdvancedOrderRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedOrderRequestComponent]
    });
    fixture = TestBed.createComponent(AdvancedOrderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

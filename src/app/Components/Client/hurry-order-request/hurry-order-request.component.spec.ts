import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurryOrderRequestComponent } from './hurry-order-request.component';

describe('HurryOrderRequestComponent', () => {
  let component: HurryOrderRequestComponent;
  let fixture: ComponentFixture<HurryOrderRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HurryOrderRequestComponent]
    });
    fixture = TestBed.createComponent(HurryOrderRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSmartDashboardComponent } from './admin-smart-dashboard.component';

describe('AdminSmartDashboardComponent', () => {
  let component: AdminSmartDashboardComponent;
  let fixture: ComponentFixture<AdminSmartDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSmartDashboardComponent]
    });
    fixture = TestBed.createComponent(AdminSmartDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss'],
})
export class ClientHomeComponent {
  constructor(private router: Router) {}

  addAdvanceOrder() {
    this.router.navigate(['client-advanced-order-request']);
  }

  showPopup1 = false;
  showPopup2 = false;

  openPopup1() {
    this.showPopup1 = true;
  }

  openPopup2() {
    this.showPopup2 = true;
  }
}

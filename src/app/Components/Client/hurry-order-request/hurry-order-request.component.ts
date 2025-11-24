import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-hurry-order-request',
  templateUrl: './hurry-order-request.component.html',
  styleUrls: ['./hurry-order-request.component.scss'],
})
export class HurryOrderRequestComponent {
  isOpen = true;

  products: string = '';
  quantity: number | null = null;
  notes: string = '';

  constructor(private cd: ChangeDetectorRef) {}

  submitRequest() {
    console.log('🔵 تفاصيل الطلب:');
    console.log('Products:', this.products);
    console.log('Quantity:', this.quantity);
    console.log('Notes:', this.notes);

    alert('تم إنشاء الطلب بنجاح!');
  }

  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}

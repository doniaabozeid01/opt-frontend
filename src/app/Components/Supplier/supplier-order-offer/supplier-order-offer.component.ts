import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-supplier-order-offer',
  templateUrl: './supplier-order-offer.component.html',
  styleUrls: ['./supplier-order-offer.component.scss']
})
export class SupplierOrderOfferComponent {
  isOpen = true;

  selectedTab: string = 'file';

  orderDetails: string = '';

  // Voice record
  isRecording = false;
  mediaRecorder: any;
  audioChunks: any[] = [];
  audioUrl: string | null = null;

  // File upload
  files: File[] = [];



  constructor(private cd: ChangeDetectorRef){}
  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  submitRequest() {
    console.log('🔵 تفاصيل الطلب:');
    console.log('Text:', this.orderDetails);
    console.log('Audio:', this.audioUrl);
    console.log('Files:', this.files);

    alert('تم إرسال الطلب بنجاح!');
  }

async toggleRecording() {
    if (!this.isRecording) {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert(
          'المتصفح لا يدعم التسجيل الصوتي، جربي متصفح آخر مثل Google Chrome.'
        );
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(stream);
        this.audioChunks = [];

        this.mediaRecorder.ondataavailable = (event: any) => {
          this.audioChunks.push(event.data);
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
          this.audioUrl = URL.createObjectURL(audioBlob);

          // ← حدث Angular فورًا
          this.cd.detectChanges();

          this.audioChunks = [];
        };

        this.mediaRecorder.start();
        this.isRecording = true;
      } catch (err: any) {
        console.error('Error while recording: ', err);
        this.isRecording = false;

        if (err.name === 'NotFoundError') {
          alert('لم يتم العثور على مايكروفون في هذا الجهاز.');
        } else if (err.name === 'NotAllowedError') {
          alert('تم رفض صلاحية الوصول للمايكروفون.');
        } else {
          alert('حدث خطأ أثناء بدء التسجيل الصوتي.');
        }
      }
    } else {
      if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
        this.mediaRecorder.stop();
      }
      this.isRecording = false;
    }
  }


  // 📂 Files Upload
  onFilesSelected(event: any) {
    const selectedFiles = Array.from(event.target.files) as File[];
    this.files.push(...selectedFiles);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer!.files);
    this.files.push(...(droppedFiles as any));
  }

  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}

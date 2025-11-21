import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-advanced-order-request',
  templateUrl: './advanced-order-request.component.html',
  styleUrls: ['./advanced-order-request.component.scss'],
})
export class AdvancedOrderRequestComponent {
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
      // 1) تأكد إن المتصفح بيدعم getUserMedia
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert(
          'المتصفح لا يدعم التسجيل الصوتي، جربي متصفح آخر مثل Google Chrome.'
        );
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start();
        this.isRecording = true;

        this.audioChunks = [];

        this.mediaRecorder.ondataavailable = (event: any) => {
          this.audioChunks.push(event.data);
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
          this.audioUrl = URL.createObjectURL(audioBlob);
          this.audioChunks = [];
        };
      } catch (err: any) {
        console.error('Error while recording: ', err);

        if (
          err.name === 'NotFoundError' ||
          err.name === 'DevicesNotFoundError'
        ) {
          alert(
            'لم يتم العثور على مايكروفون في هذا الجهاز. برجاء توصيل مايك أو تجربة جهاز آخر.'
          );
        } else if (
          err.name === 'NotAllowedError' ||
          err.name === 'PermissionDeniedError'
        ) {
          alert(
            'تم رفض صلاحية الوصول للمايكروفون. افتحي إعدادات المتصفح واسمحي بالوصول للمايك.'
          );
        } else {
          alert('حدث خطأ أثناء بدء التسجيل الصوتي. حاولي مرة أخرى.');
        }

        this.isRecording = false;
      }
    } else {
      // إيقاف التسجيل
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

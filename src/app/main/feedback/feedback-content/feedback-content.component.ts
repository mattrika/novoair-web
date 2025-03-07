import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackService } from '@main/auth/services/feedback.service'
import { PrimeModules } from '@core/ui/primeng'

interface FeadbackType {
    type: string;
}

@Component({
  selector: 'app-feedback-content',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,PrimeModules],
  templateUrl: './feedback-content.component.html',
  styleUrl: './feedback-content.component.scss'
})
export class FeedbackContentComponent {
  feedbackForm: FormGroup
  minDate: Date = new Date()
// minDate: Date | undefined;

  isSubmitting = false
  showSuccessModal=false
  showErrorModal=false

  feadbackType: FeadbackType[] | undefined;



  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
     this.feadbackType = [
            { type: 'COMPLEMENT' },
            { type: 'COMMENT'},
            { type: 'COMPLAINT' }
        ];

        // let today = new Date();
        // let month = today.getMonth();
        // let year = today.getFullYear();
        // let prevMonth = (month === 0) ? 11 : month -1;
        // let prevYear = (prevMonth === 11) ? year - 1 : year;
        // let nextMonth = (month === 11) ? 0 : month + 1;
        // let nextYear = (nextMonth === 0) ? year + 1 : year;
        // this.minDate = new Date();
        // this.minDate.setMonth(prevMonth);
        // this.minDate.setFullYear(prevYear);

    this.feedbackForm = this.fb.group({
      txtType: ['', Validators.required],
      txtName: ['', Validators.required],
      txtEmail: ['', [Validators.required, Validators.email]],
      txtContactNumber: ['', Validators.required],
      txtFlightNumber: ['', Validators.required],
      txtFlightDate: ['', Validators.required],
      txtFeedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.feedbackForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    console.log('Submitted Data:', this.feedbackForm.value);
    const formData = new FormData();

    Object.keys(this.feedbackForm.controls).forEach(key => {
      formData.append(key, this.feedbackForm.get(key)?.value);
    });

    this.feedbackService.sendFeedback(formData).subscribe(
      response => {
        this.feedbackForm.reset();
        this.isSubmitting = false;
        console.log('okay');

      },
      error => {
        this.isSubmitting = false;
        this.showErrorModal = true;
      }
    );
  }

  closeSuccessModal() {
    this.showSuccessModal = false;
}

  closeErrorModal() {
    this.showErrorModal = false;
}

}

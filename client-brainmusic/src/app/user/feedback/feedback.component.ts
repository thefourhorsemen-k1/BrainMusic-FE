import {Component, OnInit} from '@angular/core';
import {Feedback} from '../../shared/feedback.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FeedbackService} from '../../shared/feedback.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback;
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder,
              public service: FeedbackService,
              public diaglogRef: MatDialogRef<FeedbackComponent>) {
  }

  ngOnInit() {
    this.resetForm();
  }

  get f() {
    return this.feedbackForm.controls;
  }

  resetForm() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['']
    });
  }

  onSend() {
    if (this.feedbackForm.valid) {
      const {value} = this.feedbackForm;
      this.service.createFeedback(value)
        .subscribe(data => {
          console.log(value);
        }, error => {
          console.log(error);
        });
      this.resetForm();
      this.diaglogRef.close('');
    }
  }
}

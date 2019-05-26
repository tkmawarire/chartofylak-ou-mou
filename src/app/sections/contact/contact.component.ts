import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: "section-contact",
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(public portfolio: SharedService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  errorMessage(control: string) {
    if (control === 'email') {
      return this.getFormControls['email'].hasError('required')
        ? '😢 Oh noes, email cannot be empty'
        : this.getFormControls['email'].hasError('email')
        ? 'Not a valid email'
        : '';
    } else if (control === 'name') {
      return this.getFormControls['name'].hasError('required')
        ? '😢 Oh noes, name cannot be empty '
        : '';
    } else if (control === 'message') {
      return this.getFormControls['message'].hasError('required')
        ? '😢 Oh noes, message cannot be empty'
        : '';
    }
  }

  send(event?: any) {
    if (event) {
      console.log(event);
    }
    if (this.contactForm.valid) {
      const data = {
        name: this.contactForm.controls['name'].value,
        email: this.contactForm.controls['email'].value,
        message: this.contactForm.controls['message'].value
      };
      this.portfolio.http.post('/contact', data).subscribe(res => {
        console.log(res);
        this.contactForm.reset();
      });
    }
  }

  get getYear(): number {
    return new Date().getFullYear();
  }

  get getFormControls() {
    return this.contactForm.controls;
  }
}

import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from "@angular/forms";
import { SharedService } from "../../services/shared.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "section-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  contactForm: FormGroup;
  isSendingMail: boolean;

  constructor(
    public portfolio: SharedService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      message: ["", Validators.required],
    });
  }

  errorMessage(control: string) {
    if (control === "email") {
      if (this.getFormControls["email"].hasError("required")) {
        return "😢 Oh noes, email is required";
      } else if (this.getFormControls["email"].hasError("email")) {
        return '😢 Oh noes, email ain\'t valid';
      } else {
        return "";
      }
    } else if (control === "name") {
      return this.getFormControls["name"].hasError("required")
        ? "😢 Oh noes, name cannot be empty "
        : "";
    } else if (control === "message") {
      return this.getFormControls["message"].hasError("required")
        ? "😢 Oh noes, message cannot be empty"
        : "";
    }
  }

  send(event?: any) {
    if (event) {
      console.log(event);
    }
    this.isSendingMail = true;
    if (this.contactForm.valid) {
      const data = {
        name: this.contactForm.controls["name"].value,
        email: this.contactForm.controls["email"].value,
        message: this.contactForm.controls["message"].value,
      };

      this.portfolio.sendMessage(data).subscribe((res) => {
        if (res.status === 200) {
          this.openSnackBar("Message sent, will get back to you soon");
          this.resetForm();
          this.isSendingMail = false;
        } else {
          this.openSnackBar("An error occured sending your request");
          this.resetForm();
          this.isSendingMail = false;
        }
      });
    }
  }

  private resetForm() {
    this.contactForm.reset({
      name: { value: "", disabled: false },
      email: { value: "", disabled: false },
      message: { value: "", disabled: false },
    });
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
    });
  }

  get getYear(): number {
    return new Date().getFullYear();
  }

  get getFormControls() {
    return this.contactForm.controls;
  }
}

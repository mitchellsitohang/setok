import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

export interface FormControlLabel {
  controlName: string;
  labelName: string;
}

export interface FormControlConfiguration {
  formControlLabels: FormControlLabel[];
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})

export class UserRegistrationComponent implements OnInit {
  formOrder: Array<FormControlLabel> = [
    this.getFormControlLabel('email', 'E-mail'),
    this.getFormControlLabel('pass', 'Password'),
    this.getFormControlLabel('passValidation', 'Repeat password'),
    this.getFormControlLabel('streetname', 'Street name'),
    this.getFormControlLabel('city', 'City'),
    this.getFormControlLabel('zipcode', 'Zipcode'),
    this.getFormControlLabel('country', 'Country'),
    this.getFormControlLabel('phone', 'Phone')
  ];
  emailAddress = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);
  passValidation = new FormControl('', [Validators.required]);
  zipcode = new FormControl('', [Validators.required]);
  streetname = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.required]);

  formGroup: FormGroup = new FormGroup([]);

  constructor(public formService: FormService) { }

  ngOnInit(): void {
    const properties = {
      email: this.emailAddress,
      pass: this.pass,
      passValidation: this.passValidation,
      zipcode: this.zipcode,
      streetname: this.streetname,
      city: this.city,
      country: this.country,
      phone: this.phoneNumber
    };

    this.formGroup = this.formService.getFormGroup(properties);
  }

  private getFormControlLabel(name: string, label: string): FormControlLabel {
    return { controlName: name, labelName: label };
  }
}

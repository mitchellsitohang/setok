import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationDto } from 'src/app/api/models/registration-dto';
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
  

  formGroup: FormGroup = new FormGroup([]);

  constructor(public formService: FormService) { }

  ngOnInit(): void {
    const pass = new FormControl('', [Validators.required, Validators.minLength(8)]);
    const properties = {
      email: this.formService.getEmailControl(),
      pass: pass,
      passValidation: new FormControl('', [Validators.required, this.formService.validatePass(pass), this.formService.passwordIsConfirmed(pass), this.formService.validateAmountOfChars(pass)]),
      zipcode: this.formService.getRequiredControl(),
      streetname: this.formService.getRequiredControl(),
      city: this.formService.getRequiredControl(),
      country: new FormControl('', [Validators.required, this.formService.validateTaury()]),
      phone: new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.required])
    };
    this.formGroup = this.formService.getFormGroup(properties);
  }

  public submitForm(formGroup: FormGroup) {
    const registrationForm: RegistrationDto = {
      email: this.formGroup.controls['email'].value,
      pass: this.formGroup.controls['pass'].value,
      passValidation: this.formGroup.controls['passValidation'].value,
      zipcode: this.formGroup.controls['zipcode'].value,
      streetname: this.formGroup.controls['streetname'].value,
      city: this.formGroup.controls['city'].value,
      country: this.formGroup.controls['country'].value,
      phone: this.formGroup.controls['phone'].value,
    };
    console.log(registrationForm, 'registrationform');
    formGroup.reset;
  }

  private getFormControlLabel(name: string, label: string): FormControlLabel {
    return { controlName: name, labelName: label };
  }
}

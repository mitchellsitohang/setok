import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  public getFormGroup(properties: any) {
    return this.fb.group(properties);
  }

  public getErrorMessage(control: AbstractControl) {
    if (control.hasError('required')) {
      return 'You must enter a value'
    } else if (control.hasError('email')) {
      return 'Not a valid email address';
    } else if (control.hasError('pattern')) {
      return 'Must be a numeric value';
    } else {
      return '';
    }

  }
}

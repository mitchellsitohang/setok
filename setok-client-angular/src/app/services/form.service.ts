import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorMessage, ErrorMessageType } from './error-types';
import { ValidatorService } from './validator.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public passValidationError: ErrorMessage = { message: ErrorMessageType.RepeatPass };
  public isTauryValidationError: ErrorMessage = { message: ErrorMessageType.IsTaury };
  public minChars: ErrorMessage = { message: ErrorMessageType.MinChars };

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService) { }

  public getFormGroup(properties: any): FormGroup {
    return this.fb.group(properties);
  }

  public getErrorMessage(control: AbstractControl | null): string {
      return control? this.validatorService.getErrorMessage(control) : '';
    
  } 

  public validatePass(matchingControl: FormControl): ValidatorFn {
    return (abstractControl: AbstractControl): ValidationErrors | null => {
      let isMatching = matchingControl.value === abstractControl.value;
      return isMatching ? null : { passValidation: { value: abstractControl.value } };
    }
  }

  public validateTaury(): ValidatorFn {
    return (isTauValidation: AbstractControl): ValidationErrors | null => {
      let isTaury = isTauValidation.value === ErrorMessageType.Taury;
      if (isTaury) {
        alert('Yes, you have filled in Taury');
      }
    return isTaury ? null : this.isTauryValidationError;
    } 
  }
  
  public passwordIsConfirmed(passControl: FormControl): ValidatorFn {
    return (passValidation: AbstractControl): ValidationErrors | null => {
      if (passControl.value === passValidation.value) {
        return null;
      } else {
        return this.passValidationError;
      }
    };
  }

  public validateAmountOfChars(control: FormControl): ValidatorFn {
    return (controlValidation: AbstractControl): ValidationErrors | null => {
      if (control.value.length > 7) {
        return null;
      } else {
        return this.minChars;
      }
    }
  }

  public getEmailControl(): FormControl {
    return new FormControl('', [Validators.required, Validators.email]);
  }

  public getRequiredControl(): FormControl {
    return new FormControl('', [Validators.required]);
  }
}

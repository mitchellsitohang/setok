import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { ErrorMessageType } from "./error-types";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
    public constructor() {}

    public getErrorMessage(control: AbstractControl): string {
        if (control.errors) {
            if (control.hasError('required')) {
                return ErrorMessageType.Required;
              } else if (control.hasError('email')) {
                return ErrorMessageType.Email;
              } else if (control.hasError('pattern')) {
                return ErrorMessageType.Numeric;
              } else {
                return control.errors?.['message'];
              }
        } else {
            return '';
        } 
    }
}
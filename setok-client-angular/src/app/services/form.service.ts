import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() {}

  public getFormGroup(properties: string[]) {
    const fg = new FormGroup({});
    properties.forEach(key => {
      console.log(key);

      fg.addControl(key, new FormControl(''));
    });
    return fg;
  }
}

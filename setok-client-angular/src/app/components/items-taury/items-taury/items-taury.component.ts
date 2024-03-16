import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ɵTypedOrUntyped } from '@angular/forms';
import { ItemDto } from 'src/app/api/models';
import { ItemService } from 'src/app/api/services';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-items-taury',
  templateUrl: './items-taury.component.html',
  styleUrls: ['./items-taury.component.scss']
})
export class ItemsTauryComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  image = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);
  description = new FormControl('');
  quantity = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  price = new FormControl('', [Validators.required, Validators.pattern("^\\d+(\\.\\d+)?$")]);

  formGroup: FormGroup = new FormGroup([]);
  controls: { [key: string]: AbstractControl<any> } = {};
  createdItem?: ItemDto;
  items: Map<string, any>[] = [];

  constructor(public formService: FormService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    const properties = {
      name: this.name, 
      image: this.image, 
      category: this.category, 
      quantity: this.quantity, 
      price: this.price,
      description: this.description
    };

    this.formGroup = this.formService.getFormGroup(properties);
    this.controls = this.formGroup.controls;

    this.getItems();
  }

  public getErrorMessage(control: AbstractControl) {
    return this.formService.getErrorMessage(control);
  }

  public submitForm(formGroup: FormGroup) {
    const productItem: ItemDto = {
      name: this.controls['name'].value,
      description: this.controls['description'].value,
      image: this.controls['image'].value,
      category: this.controls['category'].value,
      price: Number(this.controls['price'].value),
      quantity: Number(this.controls['quantity'].value)
    };
    this.itemService.itemPost$Json({ body: productItem }).subscribe(result => {
      this.createdItem = result;
      this.getItems();
    }), (error: any) => {
      console.log(error);
    };
    formGroup.reset();
  }

  private getItems() {
    this.itemService.itemGet$Json().subscribe(result => {
      this.items = result.map(item => new Map(Object.entries(item))).reverse();
    }), (error: any) => {
      console.log(error);
    };
  }
}

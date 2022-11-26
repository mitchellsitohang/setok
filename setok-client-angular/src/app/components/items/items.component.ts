import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemDto } from 'src/app/api/models';
import { ItemService } from 'src/app/api/services';
import { FormService } from 'src/app/services/form.service';

@Component({
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  formGroup: FormGroup;
  controls: any;
  createdItem?: Map<string, any>;
  items: Map<string, any>[] = [];

  constructor(
    private formService: FormService,
    private itemService: ItemService
  ) {
    const properties = [
      'category',
      'description',
      'image',
      'name',
      'price',
      'quantity',
    ];
    this.formGroup = this.formService.getFormGroup(properties);
    this.controls = this.formGroup.controls;
  }

  ngOnInit(): void {
    this.getItems();
  }

  onSubmit(formGroup: FormGroup) {
    const item: ItemDto = {
      category: formGroup.controls['category'].value,
      description: formGroup.controls['description'].value,
      image: formGroup.controls['image'].value,
      name: formGroup.controls['name'].value,
      price: formGroup.controls['price'].value as number,
      quantity: formGroup.controls['quantity'].value as number,
    };

    this.itemService.itemPost$Json({ body: item }).subscribe((res) => {
      this.createdItem = new Map(Object.entries(item));
      this.getItems();
    }),
      (error: any) => {
        console.log(error);
      };
  }

  private getItems() {
    this.itemService.itemGet$Json().subscribe((res) => {
      this.items = res.map((item) => new Map(Object.entries(item))).reverse();
    }),
      (error: any) => {
        console.log(error);
      };
  }
}

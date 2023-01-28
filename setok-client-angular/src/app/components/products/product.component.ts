import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemDto } from 'src/app/api/models';
import { ProductService } from './products.service';
import { FormService } from 'src/app/services/form.service';
import { ItemService } from 'src/app/api/services';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  products: ItemDto[] = [];
  errorMessage = '';

  constructor(
    private formService: FormService,
    private productService: ProductService
  ) {
    const properties = [
      'category',
      'description',
      'image',
      'name',
      'price',
      'quantity',
    ];
    this.productForm = this.formService.getFormGroup(properties);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSubmit(productForm: FormGroup) {
    const item: ItemDto = {
      category: productForm.controls['category'].value,
      description: productForm.controls['description'].value,
      image: productForm.controls['image'].value,
      name: productForm.controls['name'].value,
      price: productForm.controls['price'].value as number,
      quantity: productForm.controls['quantity'].value as number,
    };

    this.productService.createProduct(item).subscribe({
      next: (result) => this.getProducts(),
      error: (err) => (this.errorMessage = err),
    }),
      (error: any) => {
        console.log(error);
      };
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => (this.errorMessage = err),
    });
  }
}

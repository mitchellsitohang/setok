import { Component, OnInit } from "@angular/core";
import { ItemDto } from "src/app/api/models";
import { ProductService } from "./products.service";

@Component({
    templateUrl: './products.component.html'
})
export class ProductComponent implements OnInit{
    products: ItemDto[] =[];
    errorMessage = '';

    constructor(private productService: ProductService){}

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => this.products = products,
            error: err => this.errorMessage = err
        });
    }
}
import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],

})
export class ProductComponent implements OnInit {
  constructor(private productService: ProductService) {

  }
  displayAddModal = false;
  products: Product[] = []
  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      }
    )
  }
  hideAddModal(isClosed: boolean) {
      this.displayAddModal = !isClosed;
  }

  showAddModal() {
    this.displayAddModal = true;
  }
  addProduct(event: any) {
    this.products.unshift(event);
  }
}

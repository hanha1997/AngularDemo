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
  products: Product[] = [];
  selectedProduct: any  = null;
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
    this.selectedProduct = null;
  }
  addProduct(event: any) {
    if (event.id === this.selectedProduct.id) {
      const productIndex = this.products.findIndex(data => data.id === event.id);
      this.products[productIndex] = event;
    } else {
      this.products.unshift(event);
    }
  }
  showEditModal(product: Product) {
    this.displayAddModal = true;
    this.selectedProduct = product;
  }
}

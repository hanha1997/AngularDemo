import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";
import {ConfirmationService, MessageService} from "primeng/api";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],

})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService, private confirmationService:ConfirmationService, private messageService: MessageService) {

  }
  displayAddModal = false;
  products: Product[] = [];
  selectedProduct: any  = null;
  subscription: Subscription[] = [];
  pdtSubscription: Subscription = new Subscription();
  ngOnInit() {
    this.getProductList();
  }


  getProductList() {
    this.pdtSubscription = this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      }
    )
    this.subscription.push(this.pdtSubscription);
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

  deletedProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
         this.productService.deleteProducts(product.id).subscribe(
           response => {
             this.products = this.products.filter(data => data.id !== product.id);
             this.messageService.add({severity:'success', summary: 'Success', detail: 'Deleted Product'});
           },
           error => {
             this.messageService.add({severity:'error', summary: 'Error', detail: error});
           }
         )
      }
    });
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }
}

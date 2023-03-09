import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from "./product-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {AddEditProductModule} from "./add-edit-product/add-edit-product.module";
import {ToastModule} from "primeng/toast";
import {MessageService} from 'primeng/api';



@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    AddEditProductModule,
    ToastModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [MessageService]
})
export class ProductModule { }

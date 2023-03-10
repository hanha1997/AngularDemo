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
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule} from "primeng/confirmdialog";



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
    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [
    ProductComponent
  ],
  providers: [MessageService, ConfirmationService]
})
export class ProductModule { }

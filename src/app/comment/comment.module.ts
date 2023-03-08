import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {CheckboxModule} from "primeng/checkbox";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    CheckboxModule,
    CalendarModule
  ]
})
export class CommentModule { }

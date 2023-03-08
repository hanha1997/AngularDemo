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
import {AutoCompleteModule} from "primeng/autocomplete";
import {InputTextModule} from "primeng/inputtext";
import {EditorModule} from "primeng/editor";


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
    CalendarModule,
    AutoCompleteModule,
    InputTextModule,
    EditorModule
  ]
})
export class CommentModule { }

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Messages} from "primeng/messages";
import {Message, MessageService} from "primeng/api";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[MessageService]
})
export class RegisterComponent implements OnInit{
  constructor(private fb: FormBuilder, private messageService:MessageService) {
  }
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street:[''],
      postCode:['', Validators.required],
    })
  })
  messages1: Message[] =[];
  ngOnInit() {
    this.messages1 = [
      {
        severity: "success",
        summary: "heading",
        detail: "More Detail...",
      },
      {
        severity: "warn",
        summary: "heading",
        detail: "More Detail...",
      },
      {
        severity: "info",
        summary: "heading",
        detail: "More Detail...",
      },
      {
        severity: "error",
        summary: "heading",
        detail: "More Detail...",
        icon: 'pi-flag-fill'
      }
    ]

  }
  addUser() {
    console.log(this.userForm);
  }
  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
      {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
  }

  clear() {
    this.messageService.clear();
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  constructor(private fb: FormBuilder) {
  }
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street:[''],
      postCode:['', Validators.required],
    })
  })
  ngOnInit() {
  }
  addUser() {
    console.log(this.userForm);
  }

}

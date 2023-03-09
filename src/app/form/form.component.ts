import {Component, OnInit} from '@angular/core';
import {FormService} from "./form.service";
import {FormField, FormFieldJSON} from "./form-field";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formFields: FormFieldJSON[] = []
  dynamicForm = this.fb.group({});

  constructor(private formService: FormService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDynamicFormFields();
  }

  getDynamicFormFields() {
    this.formService.getFormFields().subscribe(
      (response: FormField) => {
        this.formFields = response.data;
        this.setDynamicForm(response.data);
      }
    )
  }

  setDynamicForm(controls: FormFieldJSON[]) {
    for (const control of controls) {
      const validators = [];
      if (control.validators?.required) {
        validators.push(Validators.required);
      }
      this.dynamicForm.addControl(control.name, this.fb.control(control.value, validators));
    }
  }

  saveForm() {
    console.log(this.dynamicForm.value);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  checked = true;
  error = false;
  form = {
    surname: '',
    name: '',
    occupation: '',
    company: '',
    email: '',
    checked: true
  };

  @Input() meetupName: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    this.error = !f.valid;

    this.form.surname = f.value.surname;
    this.form.name = f.value.name;
    this.form.occupation = f.value.occupation;
    this.form.company = f.value.company;
    this.form.email = f.value.email;
  }

  onToggle(checked) {
    this.form.checked = checked;
  }
}

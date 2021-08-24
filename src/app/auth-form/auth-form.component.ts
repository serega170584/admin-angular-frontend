import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  public login = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  public getErrorMessage() {
    let error = '';
    if (this.login.hasError('required')) {
      error = 'You must enter a value';
    }
    return error;
  }

}

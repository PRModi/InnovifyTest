import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { User } from './../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.loginForm.value);
    const user = new User(this.loginForm.value.email, this.loginForm.value.password);
    this.authService.login(user).subscribe(
      result => console.log(result),
      error => console.log(error)
    )
  }

}

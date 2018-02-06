import { AuthService } from './../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['Parth', Validators.required],
      lastName: ['Modi', Validators.required],
      email: ['parth@gmail.com', Validators.required],
      password: ['asd123', Validators.required],
      mobile: ['1234567890', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
      address: ['Test Address', Validators.required]
    })
  }

  submit() {
    const formValue = this.signUpForm.value;
    const user = new User(
      formValue.email,
      formValue.password,
      formValue.firstname,
      formValue.lastName,
      formValue.mobile,
      formValue.dateOfBirth,
      formValue.address);
    this.authService.signup(user).subscribe(
      result => console.log(result),
      error => console.log(error)
    );
  }

}

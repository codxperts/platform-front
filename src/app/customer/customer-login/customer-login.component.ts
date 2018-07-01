import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  login(): void {
    this.router.navigate(['']);
  }

  register(): void {
    this.router.navigate(['/external/register']);
  }

  forgotPassword(): void {
    this.router.navigate(['/external/forgot-password']);
  }

}


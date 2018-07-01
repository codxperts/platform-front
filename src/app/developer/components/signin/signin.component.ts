import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user';
import { LogIn } from '../../store/actions/auth.actions';
import { AppState, selectAuthState } from '../../store/app.states';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
  ) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.store.dispatch(new LogIn(payload));
  }

}
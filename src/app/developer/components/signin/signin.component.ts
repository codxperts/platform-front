import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user';
import { LogIn } from '../../store/actions/auth.actions';
import { AppState, selectAuthState } from '../../store/app.states';
import { LayoutService } from '../../../layouts/layout.service';

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
    public layoutService: LayoutService
  ) { 
    this.getState = this.store.select(selectAuthState);
    this.layoutService.setLoader(true);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });

    this.getState.subscribe((state) => {
      this.loginForm.get('password').setErrors({server: state.errorMessage});
      // this.errorMessage = state.errorMessage;
    });

    this.getState.subscribe((state) => {
      if(state.pending === true){
        this.layoutService.setLoader(true);
        return;
      }
      // this.layoutService.setLoader(false);
    });
  }

  onSubmit(): void {
    const payload = this.loginForm.value;
    this.store.dispatch(new LogIn(payload));
  }

}
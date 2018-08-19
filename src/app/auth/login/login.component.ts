import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../entities/user';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { RequestLogin } from '../auth.actions';
import { AuthService } from '../auth.service';
import { tap } from 'rxjs/operators';
import { noop, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LayoutService } from '../../layout/layout.service';
import { isLoading } from '../auth.selectors';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  isPending$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private layoutService: LayoutService
    ) { 
      // this.layoutService.setLoader(true);
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });

    this.isPending$ = this.store.pipe(
      select(isLoading)
    );
  }

  onSubmit(): void {
    this.layoutService.setLoader(true);

    const val = this.loginForm.value;

    this.store.dispatch(new RequestLogin(val));
  }

}

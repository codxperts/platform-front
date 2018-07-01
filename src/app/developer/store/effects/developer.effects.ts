import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import { DeveloperService } from '../../services/developer.service';
import {
    AuthActionTypes,
    LogIn, LogInSuccess, LogInFailure,
    SignUp, SignUpSuccess, SignUpFailure,
    LogOut,
    GetStatus, StatusSuccess
  } from '../actions/auth.actions';


@Injectable()
export class DeveloperEffects {

  constructor(
    private actions: Actions,
    private developerService: DeveloperService,
    private router: Router,
  ) {}

  // effects go here
  

}
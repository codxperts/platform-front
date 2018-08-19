import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Logout, UserDetails, UserDetailsSuccess, RequestLogin, LoginSuccess } from './auth.actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthEffects {

  @Effect()
  requestLogin$ = this.actions$
    .pipe(
      ofType<RequestLogin>(AuthActionTypes.REQUEST_LOGIN),
      mergeMap(action => this.authService.login(action.payload.email, action.payload.password)),
      map(token => new LoginSuccess(token.token)),
      tap(payload => {
        this.router.navigateByUrl('/dashboard')
      })
  );


  @Effect({dispatch: false})
  LoginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LOGIN_SUCCESS),
    tap(action => localStorage.setItem('token', JSON.stringify(action.payload)))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LOGOUT),
    tap(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
    })
  );

  @Effect()
  init$ = defer(() => {
    const token = localStorage.getItem('token');
    if(token !== 'undefined' && token !== null){
      return of(new LoginSuccess(JSON.parse(token)));
    }
    return of(new Logout());
  });

  @Effect()
  userDetails$ = this.actions$
    .pipe(
      ofType<UserDetails>(AuthActionTypes.USER_DETAILS),
      mergeMap(action => this.authService.getUser()),
      map(user => new UserDetailsSuccess({user}))

  );

  @Effect({ dispatch: false })
  userDetailsSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.USER_DETAILS_SUCCESS)
  );

  constructor(
    private actions$: Actions,
     private router: Router,
     private authService: AuthService
    ) {

  }
}

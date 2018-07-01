import { createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';
import * as developer from './reducers/developer.reducers';


export interface AppState {
  authState: auth.State;
  developerState: developer.State;
}

export const reducers = {
  auth: auth.reducer,
  developer: developer.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
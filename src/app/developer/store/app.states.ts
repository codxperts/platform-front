import { createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';
import * as developer from './reducers/developer.reducers';
import { SearchState, searchReducer } from './reducers/search.reducers';


export interface AppState {
  authState: auth.State;
  developerState: developer.State;
  search: SearchState;
}

export const reducers = {
  auth: auth.reducer,
  developer: developer.reducer,
  search: searchReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');

export const selectDeveloperState = createFeatureSelector<AppState>('developer');
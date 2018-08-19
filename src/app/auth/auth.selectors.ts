import { createSelector } from "@ngrx/store";

// Feature selector
export const selectAuthState = state => state.auth;

// Memorize function
export const isLoggedIn = createSelector(
    selectAuthState,
    auth => auth.loggedIn 
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);

export const user = createSelector(
    selectAuthState,
    auth => auth.user
);

export const isLoading = createSelector(
    selectAuthState,
    auth => auth.isPending
);
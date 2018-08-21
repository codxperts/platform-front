import { createSelector } from '@ngrx/store';

// Feature selector
export const selectInvitationState = state => state.invitation;

// Memorize function
export const page = createSelector(
  selectInvitationState,
  invitation => invitation.page
);

// export const isLoggedOut = createSelector(
//     isLoggedIn,
//     loggedIn => !loggedIn
// );

export const invitations = createSelector(
  selectInvitationState,
  invitation => invitation.invitations
);

export const isLoading = createSelector(
  selectInvitationState,
  invitation => invitation.isLoading
);

export const messages = createSelector(
  selectInvitationState,
  invitation => invitation.messages
);

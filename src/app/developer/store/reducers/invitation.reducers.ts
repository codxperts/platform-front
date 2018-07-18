import { Developer } from '../../models/developer';
import { Invitation } from '../../models/invitation';
import { Page } from '../../models/page';
import { InvitationActionTypes, All } from '../actions/invitation.actions';

export interface InvitationState {
  page: Page;
  invitations: Array<Invitation>;
  invitation: Invitation | null;
  errorMessage: string | null;
  pending: boolean;
  successMessage: string | null;
}

const initialState: InvitationState = {
  invitations: [],
  page: {} as Page,
  invitation: null,
  errorMessage: null,
  pending: false,
  successMessage: null
};

export function invitationReducer(
  state = initialState,
  action: All
): InvitationState {
  switch (action.type) {
    case InvitationActionTypes.SEARCH_INVITATIONS:
      return {
        ...state
      };
    case InvitationActionTypes.SET_INVITATIONS:
      return {
        ...state,
        invitations: [...action.payload.invitations],
        page: { ...action.payload.page }
      };
    case InvitationActionTypes.INVITE_TO_FRIEND: {
      return {
        ...state,
        pending: true,
        errorMessage: null,
        successMessage: null
      };
    }
    case InvitationActionTypes.INVITE_TO_FRIEND_SUCCESS: {
      return {
        ...state,
        pending: false,
        errorMessage: null,
        successMessage: action.payload.message
      };
    }
    case InvitationActionTypes.INVITE_TO_FRIEND_FAILURE: {
      return {
        ...state,
        pending: false,
        errorMessage: action.payload.error,
        successMessage: null
      };
    }
    default: {
      return state;
    }
  }
}

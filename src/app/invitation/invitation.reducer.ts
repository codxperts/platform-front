import { Action } from '@ngrx/store';
import { Page } from '../shared/pagination/entities/page.entity';
import { InvitationActionTypes, InvitationActions } from './invitation.actions';
import { Invitation } from './entities/invitation.entity';

export interface InviationState {
  page: Page;
  invitations: Array<any>;
  isLoading: boolean;
  invitation: Invitation | null;
  messages: {
    success: Object | null;
    failures: Object | null;
  };
}

export const initialInviationState: InviationState = {
  page: {} as Page,
  invitations: [],
  isLoading: false,
  invitation: null,
  messages: {
    success: null,
    failures: null
  }
};

export function invitationReducer(
  state = initialInviationState,
  action: InvitationActions
): InviationState {
  switch (action.type) {
    case InvitationActionTypes.REQUEST_INVITATIONS:
      return { ...state, isLoading: true };

    case InvitationActionTypes.INVITATIONS_LOADED:
      return {
        ...state,
        invitations: [...action.payload.invitations],
        page: { ...action.payload.page },
        isLoading: false
      };

    case InvitationActionTypes.INVITE_TO_FRIEND: {
      return {
        ...state,
        isLoading: true,
        messages: { success: null, failures: null }
      };
    }

    case InvitationActionTypes.INVITE_TO_FRIEND_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        messages: { success: action.payload, failures: null }
      };
    }

    case InvitationActionTypes.INVITE_TO_FRIEND_FAILURE: {
      return {
        ...state,
        isLoading: false,
        messages: { success: null, failures: action.payload.error }
      };
    }

    case InvitationActionTypes.CLEAR_MESSAGES: {
      return { ...state, messages: { success: null, failures: null } };
    }
    default:
      return state;
  }
}

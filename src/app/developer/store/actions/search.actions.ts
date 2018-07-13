import { Action } from "@ngrx/store";
import { Invitation } from "../../models/invitation";
import { Page } from "../../models/page";

// export type Actions = SetSearch;


export enum SearchActionTypes {
  SET_SEARCH_MOVIES = '[Search] Search'
}

export class SetSearch implements Action {
  readonly type = SearchActionTypes.SET_SEARCH_MOVIES;
  payload: Readonly<{ invitations: Array<Invitation>, page: Page }>;

  public constructor(private invitations: Array<Invitation>,
                     private page: Page) {
                       console.log(invitations);
    this.payload = { invitations, page };
  }
}

export type All =
  | SetSearch;
import { Invitation } from "./invitation";
import { Page } from "./page";

export interface Search {
    page: Page;
    invitations: Array<Invitation>;
  }
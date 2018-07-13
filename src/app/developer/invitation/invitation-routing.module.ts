import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviteComponent } from './invite/invite.component';
import { InvitationListComponent } from './list/invitation.list.component';

const routes: Routes = [
  {
    path: 'list/:page',
    component: InvitationListComponent,
    data: {
      title: 'Invitations'
    }
  },
  {
    path: 'invite',
    component: InviteComponent,
    data: {
      title: 'Invite'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationRoutingModule } from './invitation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { InviteComponent } from './invite/invite.component';
import { InvitationListComponent } from './list/invitation.list.component';
import { PaginationComponent } from './list/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    InvitationRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    InviteComponent,
    InvitationListComponent,
    PaginationComponent
  ]
})
export class InvitationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsRoutingModule } from './invitation-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { InvitationEffects } from './invitation.effects';
import { StoreModule } from '@ngrx/store';
import * as fromInvitation from './invitation.reducer';
import { PaginationModule } from '../shared/pagination/pagination.module';
import { InvitationService } from './invitation.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    SharedModule,
    InvitationsRoutingModule,
    StoreModule.forFeature('invitation', fromInvitation.invitationReducer),
    EffectsModule.forFeature([InvitationEffects])
  ],
  declarations: [ListComponent, CreateComponent],
  providers: [InvitationService]
})
export class InvitationModule {}

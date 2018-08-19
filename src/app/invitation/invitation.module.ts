import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsRoutingModule } from './invitation-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EffectsModule } from '@ngrx/effects';
import { InvitationEffects } from './invitation.effects';
import { StoreModule } from '@ngrx/store';
import * as fromInvitation from './invitation.reducer';

@NgModule({
  imports: [
    CommonModule,
    InvitationsRoutingModule,
    EffectsModule.forFeature([InvitationEffects]),
    StoreModule.forFeature('invitation', fromInvitation.reducer)
  ],
  declarations: [ListComponent, CreateComponent]
})
export class InvitationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent]
})
export class MessagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    CustomerRoutingModule,
    SharedModule
  ],
  declarations: [CustomerDashboardComponent, CustomerLoginComponent]
})
export class CustomerModule { }

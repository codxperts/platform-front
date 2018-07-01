import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLayoutComponent } from '../layouts/customer-layout/customer-layout.component';

import { CustomerDashboardComponent} from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent} from './customer-login/customer-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: CustomerLoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: '',
    data: {
      base: true
    },
    component: CustomerLayoutComponent,
    children: [
      {
        path: '',
        component: CustomerDashboardComponent
      },
      {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule'
      },
      {
        path: 'messages',
        loadChildren: '../shared/messages/messages.module#MessagesModule'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

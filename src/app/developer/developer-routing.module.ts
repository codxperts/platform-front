import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { DeveloperLayoutComponent } from '../layouts/developer-layout/developer-layout.component';
import { DashboardComponent } from '../developer/components/dashboard/dashboard.component';
import { ProfileComponent } from '../developer/components/profile/profile.component';
import { SigninComponent } from '../developer/components/signin/signin.component';
import { ColleaguesComponent } from '../developer/components/colleagues/colleagues.component';
import { HomeComponent } from '../developer/components/home/home.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SigninComponent,
    data: {
      title: 'Sign In'
    }
  },
  {
    path: '',
    data: {
      base: true
    },
    component: DeveloperLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'dashboard',
        data: {
          title: 'Dashboard'
        },
        component: DashboardComponent
      },
      {
        path: 'me',
        data: {
          title: 'My Profile'
        },
        component: ProfileComponent
      },
      {
        path: 'colleagues',
        data: {
          title: 'Colleagues'
        },
        component: ColleaguesComponent
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
export class DeveloperRoutingModule { }

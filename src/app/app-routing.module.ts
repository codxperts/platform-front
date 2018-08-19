import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    data: {
      base: true
    },
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'invitations',
        loadChildren: './invitation/invitation.module#InvitationModule',
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
      path: "**",
      redirectTo: 'login'
  }
];
// [
//   {
//     path: '',
//     redirectTo: 'dashboards/analytics',
//     pathMatch: 'full'
//   },
//   {
//     path: '**',
//     redirectTo: '404'
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: []
})
export class AppRoutingModule {
  constructor(private router: Router) {
    /**
     * This allows us to switch layouts using the layout switcher.
     */
    const baseRoute = this.router.config.find(route => route.data !== undefined && route.data.base === true);
  
  }
}

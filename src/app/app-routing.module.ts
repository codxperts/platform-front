import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LayoutClassicComponent } from './layouts/layout-classic/layout-classic.component';
import { LayoutTabbedComponent } from './layouts/layout-tabbed/layout-tabbed.component';
import { LayoutBoxedComponent } from './layouts/layout-boxed/layout-boxed.component';
import { LayoutCompactComponent } from './layouts/layout-compact/layout-compact.component';
import { LayoutToolbarComponent } from './layouts/layout-toolbar/layout-toolbar.component';
import { LayoutFunkyComponent } from './layouts/layout-funky/layout-funky.component';

const routes: Routes =
[
  {
    path: '',
    redirectTo: 'dashboards/analytics',
    pathMatch: 'full'
  },
  {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerModule'
  },
  {
    path: 'developer',
    loadChildren: './developer/developer.module#DeveloperModule'
  },
  {
    path: '',
    data: {
      base: true
    },
    component: LayoutClassicComponent,
    children: [
      {
        path: 'dashboards',
        loadChildren: './dashboards/dashboards.module#DashboardsModule'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [
    LayoutToolbarComponent,
    LayoutCompactComponent,
    LayoutBoxedComponent,
    LayoutFunkyComponent,
    LayoutTabbedComponent
  ]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    /**
     * This allows us to switch layouts using the layout switcher.
     */
    const baseRoute = this.router.config.find(route => route.data !== undefined && route.data.base === true);
    switch (sessionStorage.getItem('portal-layout')) {
      case 'toolbar':
        baseRoute.component = LayoutToolbarComponent;
      break;
      case 'compact':
        baseRoute.component = LayoutCompactComponent;
      break;
      case 'boxed':
        baseRoute.component = LayoutBoxedComponent;
      break;
      case 'funky':
        baseRoute.component = LayoutFunkyComponent;
      break;
      case 'tabbed':
        baseRoute.component = LayoutTabbedComponent;
      break;
      default:
        // Do nothing.
      break;
    }
  }
}

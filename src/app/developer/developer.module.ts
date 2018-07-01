import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeveloperRoutingModule } from './developer-routing.module';

import { LayoutsModule } from '../layouts/layouts.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ColleaguesComponent } from './components/colleagues/colleagues.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TabbedChartWidgetComponent } from '../dashboards/analytics/components/tabbed-chart-widget/tabbed-chart-widget.component';
import { ActiveUsersComponent } from '../dashboards/analytics/components/active-users/active-users.component';
import { CommerceActiveUsersComponent } from '../dashboards/ecommerce/components/commerce-active-users/commerce-active-users.component';


import {
  TokenInterceptor, ErrorInterceptor,
} from './services/token.interceptor';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    LayoutsModule,
    SharedModule,
    FormsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    ChartsModule,
  ],
  declarations: [
    DashboardComponent,
    SigninComponent,
    ProfileComponent,
    ColleaguesComponent,
    SignUpComponent,
    HomeComponent,
    TabbedChartWidgetComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class DeveloperModule { }

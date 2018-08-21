import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import 'hammerjs';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    SharedModule.forRoot(),
    ToastrModule.forRoot(),
    LayoutModule
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    // Register Font Awesome
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');

    // Register layout icon SVGs
    matIconRegistry.addSvgIcon(
      'classic',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/classic.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'toolbar',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/toolbar.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'compact',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/icons/compact.svg'
      )
    );
    matIconRegistry.addSvgIcon(
      'boxed',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/boxed.svg')
    );
    matIconRegistry.addSvgIcon(
      'funky',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/funky.svg')
    );
    matIconRegistry.addSvgIcon(
      'tabbed',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/tabbed.svg')
    );
  }
}

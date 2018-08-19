import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// Modules.
import { SharedMaterialModule } from './shared-material.module';

declare var hljs: any;

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedMaterialModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedMaterialModule
  ]
})
export class SharedModule {
  constructor() {
    hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
    hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
    hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
  }
}


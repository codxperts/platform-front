import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../../shared/shared.module';
import { ViewComponent } from './view/view.component';


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent, ViewComponent]
})
export class ProjectsModule { }

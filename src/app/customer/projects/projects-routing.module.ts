import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projects List'
    },
    component: ListComponent
  },
  {
    path: 'view/:id',
    data: {
      title: 'Project Overview'
    },
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LohangCreateComponent} from './lohang-create/lohang-create.component';
import {LohangListComponent} from './lohang-list/lohang-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: LohangListComponent
  },
  {
    path: 'create',
    component: LohangCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LohangRoutingModule { }

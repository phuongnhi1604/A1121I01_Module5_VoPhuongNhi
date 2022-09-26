import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {FacilitiesDetailComponent} from './facilities-detail/facilities-detail.component';
import {FacilitiesEditComponent} from './facilities-edit/facilities-edit.component';


const routes: Routes = [
  {
    path: 'list',
    component: FacilitiesListComponent
  },
  {
    path: 'create',
    component: FacilitiesCreateComponent
  },
  {
    path: 'edit/:id',
    component: FacilitiesEditComponent
  },
  {
    path: 'detail/:id',
    component: FacilitiesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitesRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilitiesListComponent} from '../facilities/facilities-list/facilities-list.component';
import {FacilitiesCreateComponent} from '../facilities/facilities-create/facilities-create.component';
import {FacilitiesEditComponent} from '../facilities/facilities-edit/facilities-edit.component';
import {FacilitiesDeleteComponent} from '../facilities/facilities-delete/facilities-delete.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';


const routes: Routes = [
  {
    path: 'list',
    component: CustomerListComponent
  },
  {
    path: 'create',
    component: CustomerCreateComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

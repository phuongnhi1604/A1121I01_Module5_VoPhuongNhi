import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {FacilitiesListComponent} from './facilities/facilities-list/facilities-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {FacilitiesEditComponent} from './facilities/facilities-edit/facilities-edit.component';
import {FacilitiesCreateComponent} from './facilities/facilities-create/facilities-create.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';


const routes: Routes = [
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then(module => module.FacilitiesModule)
  },
  {path: '', component: FacilitiesListComponent},
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'contracts',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

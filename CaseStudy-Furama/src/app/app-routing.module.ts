import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FacilitiesEditComponent} from './facilities-edit/facilities-edit.component';
import {FacilitiesCreateComponent} from './facilities-create/facilities-create.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'facilitiesList'},
  {path: 'facilitiesList', component: FacilitiesListComponent},
  {path: 'customerList', component: CustomerListComponent},
  {path: 'customerCreate', component: CustomerCreateComponent},
  {path: 'customerUpdate/:id', component: CustomerEditComponent},
  {path: 'facilitiesUpdate/:id', component: FacilitiesEditComponent},
  {path: 'facilitiesCreate', component: FacilitiesCreateComponent},
  {path: 'contractsList', component: ContractListComponent},
  {path: 'contractCreate', component: ContractCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

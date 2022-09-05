import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {FacilitiesListComponent} from './facilities-list/facilities-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {ContractListComponent} from './contract-list/contract-list.component';


const routes: Routes = [
  {path: 'customerList', component: CustomerListComponent},
  {path: 'customerCreate', component: CustomerCreateComponent},
  {path: 'facilitiesList', component: FacilitiesListComponent},
  {path: 'contractsList', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

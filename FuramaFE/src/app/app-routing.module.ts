import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilites/facilites.module').then(module => module.FacilitesModule)
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerEditComponent, CustomerDetailComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class CustomerModule { }

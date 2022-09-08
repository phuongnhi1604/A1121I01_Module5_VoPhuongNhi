import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';
import { FacilitiesEditComponent } from './facilities-edit/facilities-edit.component';
import { FacilitiesCreateComponent } from './facilities-create/facilities-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FacilitiesListComponent,
    FacilitiesEditComponent,
    FacilitiesCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    ContractListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

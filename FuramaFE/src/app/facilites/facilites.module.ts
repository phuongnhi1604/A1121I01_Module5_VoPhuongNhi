import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitesRoutingModule } from './facilites-routing.module';
import { FacilitiesListComponent } from './facilities-list/facilities-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FacilitiesCreateComponent } from './facilities-create/facilities-create.component';
import { FacilitiesEditComponent } from './facilities-edit/facilities-edit.component';
import { FacilitiesDetailComponent } from './facilities-detail/facilities-detail.component';


@NgModule({
  declarations: [FacilitiesListComponent, FacilitiesCreateComponent, FacilitiesEditComponent, FacilitiesDetailComponent],
  imports: [
    CommonModule,
    FacilitesRoutingModule,
    ReactiveFormsModule
  ]
})
export class FacilitesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FacilitiesDetailComponent } from './facilities-detail/facilities-detail.component';


@NgModule({
  declarations: [FacilitiesDetailComponent],
    imports: [
        CommonModule,
        FacilitiesRoutingModule,
        ReactiveFormsModule
    ]
})
export class FacilitiesModule { }

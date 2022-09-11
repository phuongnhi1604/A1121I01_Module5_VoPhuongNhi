import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesDeleteComponent } from './facilities-delete/facilities-delete.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FacilitiesDeleteComponent],
    imports: [
        CommonModule,
        FacilitiesRoutingModule,
        ReactiveFormsModule
    ]
})
export class FacilitiesModule { }

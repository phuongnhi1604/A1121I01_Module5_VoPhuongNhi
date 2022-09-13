import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
    imports: [
        CommonModule,
        FacilitiesRoutingModule,
        ReactiveFormsModule
    ]
})
export class FacilitiesModule { }

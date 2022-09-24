import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LohangRoutingModule } from './lohang-routing.module';
import { LohangCreateComponent } from './lohang-create/lohang-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LohangListComponent } from './lohang-list/lohang-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [LohangCreateComponent, LohangListComponent],
  imports: [
    CommonModule,
    LohangRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class LohangModule { }

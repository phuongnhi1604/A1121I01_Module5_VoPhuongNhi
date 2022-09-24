import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanphamRoutingModule } from './sanpham-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SanphamRoutingModule,
    NgxPaginationModule
  ]
})
export class SanphamModule { }

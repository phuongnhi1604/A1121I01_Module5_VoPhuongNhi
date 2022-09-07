import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';


const routes: Routes = [
  {
    path: 'detail/:word', component: DictionaryDetailComponent
  },
  {
    path: '', component: DictionaryPageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

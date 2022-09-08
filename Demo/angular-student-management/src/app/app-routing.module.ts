import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentCreateComponent} from './student-create/student-create.component';


const routes: Routes = [
  {path: '', component: StudentListComponent},
  {path: 'detail/:id', component: StudentDetailComponent},
  {path: 'create', component: StudentCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

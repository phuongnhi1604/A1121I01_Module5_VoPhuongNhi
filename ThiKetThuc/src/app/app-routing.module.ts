import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'sanpham',
    loadChildren: () => import('./sanpham/sanpham.module').then(module => module.SanphamModule)
  },
  {
    path: 'lohang',
    loadChildren: () => import('./lohang/lohang.module').then(module => module.LohangModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

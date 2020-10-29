import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManterPatrimoniosComponent } from './manter-patrimonios/manter-patrimonios.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "patrimonios" },
  { path: "patrimonios", component: ManterPatrimoniosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

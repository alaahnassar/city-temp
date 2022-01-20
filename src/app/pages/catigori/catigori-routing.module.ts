import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatigoriComponent } from './catigori.component';

const routes: Routes = [
  {
    path:'',
    component:CatigoriComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatigoriRoutingModule { }

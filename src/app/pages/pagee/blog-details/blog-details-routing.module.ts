import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details.component';
import { BlogDetailsModule } from './blog-details.module';

const routes: Routes = [
  {
    path:'',
    component:BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogDetailsRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicComponent } from "../layout/basic/basic.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
  path: '',
  component: BasicComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule
        )
    },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

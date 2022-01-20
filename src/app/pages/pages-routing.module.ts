import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicComponent } from "../layout/basic/basic.component";
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
    {
      path:'catagori',
      loadChildren: () => import('./catigori/catigori.module').then(m => m.CatigoriModule)
    },
    {
      path:'blog',
      loadChildren: () => import('./pagee/blog/blog.module').then(m => m.BlogModule)
    },
    {
      path:'blog-details',
      loadChildren: () => import('./pagee/blog-details/blog-details.module').then(m => m.BlogDetailsModule)
    },
    {
      path:'element',
      loadChildren: () => import('./pagee/element/element.module').then(m => m.ElementModule)
    },

    {
      path:'add-list',
      loadChildren:() => import('./add-listing/add-listing.module').then(m=>m.AddListingModule)
    },
    {

        path:'listing',
        loadChildren:() => import('./listing/listing.module').then(m=>m.ListingModule)

    },
    {
      path:'contact-us',
      loadChildren:() => import('./contact/contact.module').then(m=>m.ContactModule)
    }

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

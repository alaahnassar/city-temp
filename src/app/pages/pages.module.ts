import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CatigoriComponent } from './catigori/catigori.component';
import { ContactComponent } from './contact/contact.component';
import { AddListingComponent } from './add-listing/add-listing.component';



@NgModule({
  declarations: [
    CatigoriComponent,
    ContactComponent,
    AddListingComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

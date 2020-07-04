import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { FalseProductComponent } from './products/false-product/false-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'adminPanel', loadChildren: () => import('./admin-panel/adminPanel.module').then(m => m.AdminPanelModule) },
  { path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'falseProduct', component: FalseProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

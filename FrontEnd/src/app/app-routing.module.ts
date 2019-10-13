import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 { path : 'product', loadChildren: () => import('./productdisplay/productdisplay.module').then(m=>m.ProductdisplayModule) },
 { path : 'edit-product',  loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)},
{ path : '', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

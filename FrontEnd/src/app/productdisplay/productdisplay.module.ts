import { SharedModule } from './../shared/shared.module';
import { NgModule, Component } from '@angular/core';
import { ProductViewComponent } from './product-view/product-view.component';
import { RouterModule, Route } from '@angular/router';

@NgModule({
  declarations: [ProductViewComponent],
  imports: [SharedModule, 
   RouterModule.forChild([{
   path: ':id', component: ProductViewComponent
  }])
],
   exports : [RouterModule]
})
export class ProductdisplayModule {}

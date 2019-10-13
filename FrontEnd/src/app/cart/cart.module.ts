import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatGridList, MatGridListModule, MatCardModule } from '@angular/material';
import { CartVarientComponent } from './cart-varient/cart-varient.component';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CommonserviceModule } from '../commonservice/commonservice.module';



@NgModule({
  declarations: [
    CartItemComponent, CartVarientComponent, CartContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatGridListModule,
    MatCardModule,
    CommonserviceModule,
  ],
  entryComponents: [CartItemComponent]

})
export class CartModule { }

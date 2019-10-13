import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { MatListModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const inventoryRoutes: Routes = [
  {
    path: '',
    component: AddProductComponent
  }
];


@NgModule({
  declarations: [AddProductComponent],
  imports: [SharedModule,
    RouterModule.forChild(inventoryRoutes)
  ],
 exports: [RouterModule]
})
export class InventoryModule { }

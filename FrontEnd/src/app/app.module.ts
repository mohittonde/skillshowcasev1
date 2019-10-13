import { InventoryModule } from './inventory/inventory.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { MatListModule, MatFormFieldModule, MatInputModule, MatCardModule, MatMenuModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductdisplayModule } from './productdisplay/productdisplay.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
      ],
  imports: [ 
    SharedModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

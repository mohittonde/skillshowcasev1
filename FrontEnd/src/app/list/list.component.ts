import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductQuery, DummyProduct } from '../Model/IProduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public opened = true;
  public modevalue = 'side';
  constructor(private productService: ProductServiceService) { }
   products: Observable<DummyProduct>;
  ngOnInit() {
     this.products = this.productService.getProduct();
 }



}

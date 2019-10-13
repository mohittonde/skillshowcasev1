import { DummyProduct } from './../../Model/IProduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor() { }

public product: DummyProduct;

  ngOnInit() {
  }

}

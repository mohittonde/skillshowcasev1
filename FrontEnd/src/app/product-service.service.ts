import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  DummyProduct } from './Model/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpClient: HttpClient) { }

  getProduct()  {
    return this.httpClient.get<DummyProduct>('/api/Product');
  }
}

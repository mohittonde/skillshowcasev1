import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IProductQuery } from '../Model/IProduct';

@Injectable()
export class CartService {
 private cartSubject: Subject<IProductQuery>;
 public cartUpdater: Observable<IProductQuery>;
  constructor() {
    this.cartSubject = new Subject<IProductQuery>();
    this.cartUpdater = this.cartSubject.asObservable();
  }

  public sendNext(item: IProductQuery) {
    this.cartSubject.next(item);
  }
}

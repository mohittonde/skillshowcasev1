import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from './../../commonservice/cart.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CartItemComponent } from './../cart-item/cart-item.component';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, ComponentFactoryResolver, Inject } from '@angular/core';
import { IProductQuery } from 'src/app/Model/IProduct';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {


  public cartFormGroup: FormGroup;
  public cartItems: FormArray;
  public ngUnSubscribe = new Subject();

  @ViewChild('root', {static: false, read: ViewContainerRef}) rootRef: ViewContainerRef;
  
  compFactoryResolver: any;

  constructor(private fb: FormBuilder, private cartService: CartService,@Inject(ComponentFactoryResolver) compFactoryResolver ) {
    this.cartItems = this.fb.array([]);
    this.cartFormGroup = this.fb.group({
      cartItems: this.cartItems
    });
    this.compFactoryResolver = compFactoryResolver;
  }



  ngOnInit() {
    this.cartService.cartUpdater.pipe(takeUntil(this.ngUnSubscribe)).subscribe((item: IProductQuery ) => {
      if (!!item) {
      this.addProduct(item);
      }
    });
  }

  private addProduct(item: IProductQuery)  {
    const factory = this.compFactoryResolver.resolveComponentFactory(CartItemComponent);
    const component = this.rootRef.createComponent(factory);
    const cardItemInstance =  component.instance as CartItemComponent;
    cardItemInstance.updateItem(item);
    const form = cardItemInstance.createForm();
    this.cartItems.push(form);
  }

  private getInstance<T>(data) {
   
  }
}

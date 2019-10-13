import { IProductQuery, Variant, VariantOption } from 'src/app/Model/IProduct';
import { CartService } from './../../commonservice/cart.service';
import { CartModule } from './../cart.module';
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  inject
} from '@angular/core/testing';

import { CartContainerComponent } from './cart-container.component';
import { CommonserviceModule } from 'src/app/commonservice/commonservice.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {
  MatSelectModule,
  MatFormFieldModule,
  MatOptionModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {
  FormsModule,
  ReactiveFormsModule,
  FormArray,
  FormGroup
} from '@angular/forms';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartVarientComponent } from '../cart-varient/cart-varient.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

fdescribe('CartContainerComponent', () => {
  let component: CartContainerComponent;
  let fixture: ComponentFixture<CartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartVarientComponent,
        CartContainerComponent,
        CartItemComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatOptionModule,
        MatGridListModule,
        MatCardModule,
        CommonserviceModule
      ]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [CartItemComponent]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cart valid', fakeAsync(
    inject([CartService], (cartService: CartService) => {
      const item = {} as IProductQuery;
      item.title = 'abc';
      item.id = '12';

      const variantOption = {} as VariantOption;
      variantOption.id = '233';
      variantOption.displayValue = 'Red';

      const variant = {} as Variant;
      variant.id = '23';
      variant.name = 'Color';
      variant.displayValue = 'Color';
      variant.options = [variantOption];
      item.variants = [variant];
      cartService.sendNext(item);
      const formArray = component.cartFormGroup.controls['cartItems'] as FormArray;
      const caritem = formArray.controls[0] as FormGroup;
      const varriants = caritem.controls['variants'] as FormArray;
      const varriantForm = varriants.controls[0] as FormGroup;
      varriantForm.controls[variant.name].setValue('233');
      expect(component.cartItems.length).toBe(1);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.cartFormGroup.valid).toBeTruthy();
      });
    })
  ));

  it('should cart invalid', fakeAsync(
    inject([CartService], (cartService: CartService) => {
      const item = {} as IProductQuery;
      item.title = '';
      item.id = '12';

      const variantOption = {} as VariantOption;
      variantOption.id = '24';
      variantOption.displayValue = 'Red';

      const variant = {} as Variant;
      variant.id = '23';
      variant.name = 'Red';
      variant.displayValue = 'Color';
      variant.options = [variantOption];
      item.variants = [variant];
      cartService.sendNext(item);
      expect(component.cartItems.length).toBe(1);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.cartFormGroup.valid).toBeFalsy();
      });
    })
  ));
});

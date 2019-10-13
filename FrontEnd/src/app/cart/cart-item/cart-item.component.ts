import { ProductServiceService } from './../../product-service.service';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IProductQuery, Variant } from 'src/app/Model/IProduct';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit, AfterViewInit, AfterContentInit {
 
  public cartItemFormGroup: FormGroup;
  public product = {} as IProductQuery;


  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {

  }

  public createForm(): FormGroup {
    this.cartItemFormGroup = this.fb.group({
      name: [this.product.title, Validators.required],
      variants: this.fb.array(this.product.variants.map(x => this.mapVariantToForm(x)))
    });
    return this.cartItemFormGroup;
  }

  private mapVariantToForm(variant: Variant): FormGroup  {
    const group: any = {};
    const validationArray: Array<ValidatorFn> = [Validators.required, Validators.minLength(3)];
    group[variant.name] = new FormControl(null, validationArray);
    return new FormGroup(group);
  }
  // public getItem(): Product {
  //   return this.product;
  // }


   ngAfterViewInit(): void {

  }

   ngAfterContentInit(): void {
    
  }

   public updateItem(item: IProductQuery) {
    this.product = item;
    //  this.cartItemFormGroup.patchValue({
    //    name: item.title,
    //    variants: item.variants
    //  });
   }
}

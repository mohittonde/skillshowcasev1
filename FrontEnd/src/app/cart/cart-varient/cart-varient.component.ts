import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Variant } from 'src/app/Model/IProduct';

@Component({
  selector: 'app-cart-varient',
  templateUrl: './cart-varient.component.html',
  styleUrls: ['./cart-varient.component.css']
})
export class CartVarientComponent implements OnInit {

  @Input() variant: Variant;
  @Input() variantForm: FormGroup;
  @Input() variantForName: string;


  ngOnInit() {

  }

  


}

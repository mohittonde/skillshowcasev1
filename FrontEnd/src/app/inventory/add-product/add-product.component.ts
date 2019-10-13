import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public addProduct: FormGroup;
  public name: FormControl;
  public amount: FormControl;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.name = this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]);
    this.amount = this.fb.control('', [Validators.required]);
    this.addProduct = this.fb.group({
      name: this.name,
      amount: this.amount
    });
  }

  onSubmit() {
    if (this.addProduct.valid) {
      console.log(this.addProduct.value);
      this.httpClient
        .post('api/product', this.addProduct.value)
        .pipe(take(1))
        .subscribe(() => {
          console.log('Submited Succesfully');
        });
    }
  }

  ngOnInit() {

  }
}

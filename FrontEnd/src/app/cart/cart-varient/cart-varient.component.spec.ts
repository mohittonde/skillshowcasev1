import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartVarientComponent } from './cart-varient.component';

describe('CartVarientComponent', () => {
  let component: CartVarientComponent;
  let fixture: ComponentFixture<CartVarientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartVarientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartVarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  newCart = new Cart(0,"","",0,);
  @Output() addCart = new EventEmitter<Cart>();

  submitCart(){
    this.addCart.emit(this.newCart);
      }

  constructor() { }

  ngOnInit(): void {
  }

}

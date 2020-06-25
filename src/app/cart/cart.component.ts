import { Component, OnInit } from '@angular/core';
import {Cart } from '../cart'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:Cart[] = [
    // new Cart(1,'Car','Subaru',1200000),
    // new Cart(2,'Laptop','Lenovo',60000),
    // new Cart(3,'Phone','Iphone11',28000),

  ];
  deleteCart(isDone, index){
    if (isDone) {
      let toDelete = confirm(`Are you sure you want to delete ${this.carts[index].name}?`)

    if (isDone) {
      this.carts.splice(index,1);
    }
  }
  }
  toggleDetails(index){
    this.carts[index].showDescription = !this.carts[index].showDescription;
  }
  addNewItem(cart){
    let itemLength = this.carts.length;
    cart.id = itemLength+1;
    cart.completeDate = new Date(cart.completeDate)
    this.carts.push(cart)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

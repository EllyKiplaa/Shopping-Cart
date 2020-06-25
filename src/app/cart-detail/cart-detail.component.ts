import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Cart } from '../cart';


@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  @Input() cart : Cart;
  @Output() isComplete = new EventEmitter<boolean>();

  cartComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class CartService {

  array = [];
  constructor() { }
 
  addToCart(trips) {
    this.array.push(trips);
    Swal.fire(
      'Vacation?',
      'Successfully added to cart!',
      'success'
    )
  }
 
  getItems() {
    return this.array;
  }
 
  clearCart() {
    this.array = [];
    return this.array;
  }

}

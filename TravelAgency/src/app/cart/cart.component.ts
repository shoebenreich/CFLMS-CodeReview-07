import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { FormControl, FormGroup, FormBuilder,Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  trips;
  totalCost;
  tripsPrice: number = 0;
  fullCart: boolean;

  constructor(private cartService: CartService,private formBuilder:FormBuilder) { }
  info = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    adress: new FormControl("",Validators.required),
    });

  ngOnInit(): void {
    this.trips = this.cartService.getItems();
    this.fullCart = typeof this.trips != "undefined" && this.trips.length > 0;
    for (let nextTrip of this.trips) {
	    this.tripsPrice += Number(nextTrip.price);
    }

    if(this.tripsPrice < 200){
      this.totalCost = `${this.tripsPrice} €`;
    } 
    else if (this.tripsPrice >= 200 && this.tripsPrice < 500 )
    {
      this.tripsPrice = this.tripsPrice * 0.9;
      this.totalCost = `(10% discount): ${this.tripsPrice} €`;

    }else if(this.tripsPrice >= 500)
    {
      this.tripsPrice = this.tripsPrice * 0.8;
      this.totalCost = `(20% discount): ${this.tripsPrice} €`;
    }
  }

  purchase() {
    if (this.info.valid){
    Swal.fire({
      icon: 'success',
      title: 'Order placed!',
      text: 'Your order is on the way!',
    });
    this.info.reset();
    window.location.reload();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Fill in all the fields!',
    });
  }
  }

}


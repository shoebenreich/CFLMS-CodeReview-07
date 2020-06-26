import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trips } from '../tripList';
import { CartService} from "../cart.service";


@Component({
  selector: 'trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
  trip;
  
  addToCart(){
    this.cartService.addToCart(this.trip);
  }
  constructor(private route: ActivatedRoute,private cartService: CartService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.trip = trips[+params.get('id')];
  });
}
}

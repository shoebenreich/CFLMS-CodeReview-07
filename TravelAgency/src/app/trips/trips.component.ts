import { Component, OnInit } from '@angular/core';
import { trips } from '../tripList';
import { CartService } from "../cart.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
trips = trips;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
  }

}


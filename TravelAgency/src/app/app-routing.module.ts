import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { CartComponent } from './cart/cart.component';
import { BlogComponent } from './blog/blog.component';
import { TripsComponent } from './trips/trips.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: "trip-detail/:id", component: TripDetailComponent
  },{
    path: "myCart", component: CartComponent
  },{
    path: "blog", component: BlogComponent
  },{
    path: "trips", component: TripsComponent
  },{
    path: "about", component: AboutComponent
  },{
    path: "contact", component: ContactComponent
  },
  { path: 'trips/:id', component: TripDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
  restaurant: Object = {};
  restUser = {role : ''};
  name: String;

  constructor(private router : Router, private route: ActivatedRoute, private userService : UserService,  private restaurantService : RestaurantService,) {
    this.route.params.subscribe(params => {
       this.name = params['name'];
       this.restaurantService.getOneRestaurant(this.name).subscribe(restaurant =>  {
         this.restaurant = restaurant;
         console.log(this.restaurant)
       })
    });


  }

  ngOnInit() {
  }

}

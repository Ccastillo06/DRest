import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  restaurant: Object = {};
  name: String;

  constructor(private router : Router, private route: ActivatedRoute, private userService : UserService,  private restaurantService : RestaurantService,) {
    this.route.params.subscribe(params => {
       this.name = params['name'];
       this.restaurantService.getOneRestaurant(this.name).subscribe(restaurant =>  {
         this.restaurant = restaurant;
       });
    });
  }
  ngOnInit() {
  }

}

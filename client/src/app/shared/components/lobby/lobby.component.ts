import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RestaurantService } from '../../services/restaurant.service';
import { FileUploader } from "ng2-file-upload";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  private lobbyUser = {role : ''};
  private restaurants: Array<Object>;
  newRestaurant = {name: '', description: ''};
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/restaurant/new`
  });

  constructor(private router : Router, private userService : UserService,  private restaurantService : RestaurantService,) {
    this.userService.fillUser().subscribe(user => {
      this.lobbyUser = user
      if(this.lobbyUser.role == 'Customer') {
        this.restaurantService.getRestaurants().subscribe(restaurants =>  {
          this.restaurants = restaurants;
          console.log(this.restaurants)
          console.log(this.lobbyUser)
        })
      }
    });
  }

  ngOnInit() {
  }

  restNew(){
    this.uploader.onBuildItemForm = (item, form) => {
        form.append('name', this.newRestaurant.name);
        form.append('description', this.newRestaurant.description);
      };
      this.uploader.uploadAll();
    }
  }

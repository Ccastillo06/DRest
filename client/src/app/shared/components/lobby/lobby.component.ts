import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RestaurantService } from '../../services/restaurant.service';
import { FileUploader } from "ng2-file-upload";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  public lobbyUser = {role : ''};
  public restaurants: Array<Object>;
  newRestaurant = {name: '', description: '', openTime: '' , closeTime: ''};
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/restaurant/new`
  });

  constructor(
    public service: NotificationsService,
    public router : Router,
    public userService : UserService,
    public restaurantService : RestaurantService,) {
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

  restNew() {
    this.service.success('Restaurant Created!', 'You can now start managing it!', {
       timeOut: 3000,
       showProgressBar: true,
       clickToClose: true
     });
    this.uploader.onBuildItemForm = (item, form) => {
        form.append('name', this.newRestaurant.name);
        form.append('description', this.newRestaurant.description);
        form.append('openTime', this.newRestaurant.openTime);
        form.append('closeTime', this.newRestaurant.closeTime);
      };
    this.uploader.uploadAll();
    setTimeout(function(){
      this.userService.fillUser().subscribe(user => {
        this.lobbyUser = user;
      });
    }.bind(this), 2500);
    this.newRestaurant = {name: '', description: '', openTime: '' , closeTime: ''};
    }

  }

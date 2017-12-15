import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-data-lobby',
  templateUrl: './data-lobby.component.html',
  styleUrls: ['./data-lobby.component.css']
})
export class DataLobbyComponent implements OnInit {
  public lobbyUser = {role : ''};
  public restaurants: Array<Object>;

  constructor(
    public router : Router,
    public userService : UserService,
    public restaurantService : RestaurantService,) {
      this.userService.fillUser().subscribe(user => {
        this.lobbyUser = user
      });
  }

  ngOnInit() {
  }


}

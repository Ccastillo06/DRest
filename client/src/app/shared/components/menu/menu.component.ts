import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { MenuService } from '../../services/menu.service';
import { UserService } from '../../services/user.service';
import { ConfirmationService } from '@jaspero/ng-confirmations';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  id: String;
  menu: Object = {};
  restaurant: Object = {};
  user:Object = {};

  constructor(
    public service: NotificationsService,
    public _confirmation: ConfirmationService,
    public router : Router,
    public route: ActivatedRoute,
    public userService : UserService,
    public menuService : MenuService,
    public restaurantService : RestaurantService,) {
      this.route.params.subscribe(params => {
         this.id = params['id'];
         this.restaurantService.getOneRestaurant(this.id).subscribe(restaurant =>  {
           this.restaurant = restaurant;
         });
      });
  }

  ngOnInit() {
    this.userService.fillUser().subscribe(user => {
      this.user = user;
    })
  }

  deleteThis(id){
    this._confirmation.create('Delete Product', 'Are you sure?', {
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: true,
        confirmText: 'Delete',
        declineText: 'Close'
      })
      .subscribe((ans) => {
        if(ans.resolved) {
          this.service.error('Product Deleted!', 'You can add it again later from your product list', {
             timeOut: 2000,
             showProgressBar: true,
             clickToClose: true
           });
          this.menuService.deleteThis(this.id, id).subscribe(res => {
            this.restaurantService.getOneRestaurant(this.id).subscribe(restaurant =>  {
              this.restaurant = restaurant;
            });
          })
        }
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { MenuService } from '../../services/menu.service';
import { UserService } from '../../services/user.service';
import { ConfirmationService } from '@jaspero/ng-confirmations';
import { NotificationsService } from 'angular2-notifications';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  tableId: String;
  menu: Object = {};
  restaurant: Object = {};
  user:Object = {};
  table = {orders:[]};
  order: Array<Object>;

  constructor(
    public service: NotificationsService,
    public _confirmation: ConfirmationService,
    public router : Router,
    public route: ActivatedRoute,
    public userService : UserService,
    public menuService : MenuService,
    public restaurantService : RestaurantService,
    public tableService: TableService,) {
      this.route.params.subscribe(params => {
         this.tableId = params['id'];
         this.userService.fillUser().subscribe(user => {
           this.user = user;
           this.restaurantService.getOneRestaurant(user.works_in).subscribe(restaurant =>  {
             this.restaurant = restaurant;
             this.tableService.getTable(this.tableId).subscribe(table => {
               this.table = table;
             })
           });
         })
      });
  }

  ngOnInit() {

  }

  plusThis(objId){
    this.service.success('Added to Order!', 'Keem the food coming!', {
       timeOut: 800,
       showProgressBar: true,
       clickToClose: true
     });
    this.tableService.plusThis(this.tableId, objId).subscribe(table => {
      this.table = table;
      console.log(this.table)
    })
  }

  minusThis(objId){
    this.service.alert('Eliminated from Order!', 'Want more food?', {
       timeOut: 800,
       showProgressBar: true,
       clickToClose: true
     });
    this.tableService.minusThis(this.tableId, objId).subscribe(table => {
      this.table = table;
      console.log(this.table)
    })
  }
}

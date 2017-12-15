import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { UserService } from '../../services/user.service';
import { TableService } from '../../services/table.service';
import { ConfirmationService } from '@jaspero/ng-confirmations';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  user: Object = {};
  id: String = '';
  restaurant = {};
  table = {title: '', number: 0, zone: ''}
  delete: String = '';
  constructor(
    public _confirmation: ConfirmationService,
    public router : Router,
    public route: ActivatedRoute,
    public userService : UserService,
    public restaurantService : RestaurantService,
    public service: NotificationsService,
    public tableService: TableService,
    ) {
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

  tableAdd(){
    this.service.success('Table Added!', 'Keem them coming!', {
       timeOut: 2000,
       showProgressBar: true,
       clickToClose: true
     });
    this.tableService.newTable(this.table, this.id).subscribe(restaurant => {
      this.restaurant = restaurant;
    })
  }

  tableDelete(){
    this.service.error('Table Deleted!', 'Remember to keep good eye on your business!', {
       timeOut: 1500,
       showProgressBar: true,
       clickToClose: true
     });
    this.tableService.tableDelete(this.delete, this.id).subscribe(restaurant => {
      this.restaurant = restaurant;
    })
  }

}

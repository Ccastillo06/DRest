import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { MenuService } from '../../services/menu.service';
import { UserService } from '../../services/user.service';
import { ConfirmationService } from '@jaspero/ng-confirmations';
import { NotificationsService } from 'angular2-notifications';
import { TableService } from '../../services/table.service';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-total-tickets',
  templateUrl: './total-tickets.component.html',
  styleUrls: ['./total-tickets.component.css']
})
export class TotalTicketsComponent implements OnInit {
  user:Object = {};
  ticketArray: Array<any> = [];
  restId: String = '';
  restaurant: Object = {};
  oneTicket:Object = {};
  seeList: Boolean = true;
  seeTicket: Boolean = false;

  constructor(
      public service: NotificationsService,
      public _confirmation: ConfirmationService,
      public router : Router,
      public route: ActivatedRoute,
      public userService : UserService,
      public menuService : MenuService,
      public restaurantService : RestaurantService,
      public tableService: TableService,
      public ticketService: TicketService) {
        this.route.params.subscribe(params => {
           this.restId = params['id'];
            this.userService.fillUser().subscribe(user => {
              this.user = user;
              this.ticketService.getAll(this.restId).subscribe(tickets => {
                this.ticketArray = tickets.map(e => {
                  e.createdAt = e.createdAt.slice(0, e.createdAt.indexOf('T'));
                  return e;
                })
                this.restaurantService.getOneRestaurant(this.restId).subscribe(restaurant => {
                  this.restaurant = restaurant;
                })
              })
            });
          });
   }

  ngOnInit() {
  }

  showTicket(ticketId){
    this.oneTicket = this.ticketArray.filter(e => {return e._id==ticketId})[0]
    this.seeList = !this.seeList;
    this.seeTicket = !this.seeTicket;
  }

  inverse(){
    this.seeList = !this.seeList;
    this.seeTicket = !this.seeTicket;
  }

}

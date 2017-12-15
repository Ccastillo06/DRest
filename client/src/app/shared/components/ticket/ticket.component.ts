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
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tableId: String;
  restaurant: Object = {};
  user:Object = {};
  table: Object = {};
  orders: Array<Object> = [];
  ticket: Object = {};
  usermail: String = '';

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
         this.tableId = params['id'];
         this.userService.fillUser().subscribe(user => {
           this.user = user;
           this.restaurantService.getOneRestaurant(user.works_in).subscribe(restaurant =>  {
             this.restaurant = restaurant;
             this.ticketService.createTicket(this.tableId, restaurant._id).subscribe(ticket => {
               this.ticket = ticket;
               this.ticketService.freeOrders(this.tableId, restaurant._id).subscribe(table => {
                 this.ticketService.updInventory(ticket).subscribe(res =>{
                   console.log(ticket)
                 })
               })
             })
           });
         })
      });
  }

  ngOnInit() {
  }

  sendTicket(){
    this.service.success('Sent Mail!', 'Happy customers are so good!', {
       timeOut: 2000,
       showProgressBar: true,
       clickToClose: true
     });
    this.ticketService.sendTicket(this.usermail, this.ticket).subscribe(res => {
      console.log('Sent!')
    })
  }
}

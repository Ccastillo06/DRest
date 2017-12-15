import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { UserService } from '../../services/user.service';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  restId: String;
  restaurant: Object = {};
  user:Object = {};
  data:Object = {};

  public doughnutChartLabels:string[] = []
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';
  foodObj = {foodArray : [], foodAmount : []};
  show: Boolean = false;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Total'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [];
  tableObj = {tableArray : [], tableAmount : []};
  average:any = 0;
  constructor(
    public router : Router,
    public route: ActivatedRoute,
    public userService : UserService,
    public restaurantService : RestaurantService,
    public ticketService: TicketService) {
      this.route.params.subscribe(params => {
         this.restId = params['id'];
         this.userService.fillUser().subscribe(user => {
           this.user = user;
           this.restaurantService.getOneRestaurant(this.restId).subscribe(restaurant =>  {
             this.restaurant = restaurant;
             console.log(this.restaurant)
             restaurant.tickets.forEach(e => {
               this.average += e.total_price;
               e.total_order.forEach((x,i) => {
                 if(this.foodObj.foodArray.indexOf(x.name) == -1) {
                   this.foodObj.foodArray.push(x.name)
                   this.foodObj.foodAmount.push(x.amount)
                 } else {
                   this.foodObj.foodAmount[this.foodObj.foodArray.indexOf(x.name)] = parseInt(this.foodObj.foodAmount[this.foodObj.foodArray.indexOf(x.name)]) + parseInt(x.amount)
                 }
               })
               if(this.tableObj.tableArray.indexOf(e.table_name)==-1){
                 this.tableObj.tableArray.push(e.table_name)
                 this.tableObj.tableAmount.push(1)
               } else {
                 this.tableObj.tableAmount[this.tableObj.tableArray.indexOf(e.table_name)] += 1;
               }
             })
             this.tableObj.tableArray.forEach((e,i) => {
               this.barChartData.push({data: [this.tableObj.tableAmount[i]], label: this.tableObj.tableArray[i]},)
             })
             this.doughnutChartLabels = this.foodObj.foodArray;
             this.doughnutChartData = this.foodObj.foodAmount;
             this.average = this.average / restaurant.tickets.length;
             this.show = true;
           });
         })
      });
    }

  ngOnInit() {
  }

  public chartClicked(e:any):void {
  console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}

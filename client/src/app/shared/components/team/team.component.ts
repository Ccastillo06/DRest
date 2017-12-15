import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { UserService } from '../../services/user.service';
import { ConfirmationService } from '@jaspero/ng-confirmations';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  user: Object = {};
  id: String = '';
  restaurant = {workers : []};
  worker = {username: '', email: '', password: '', role: ''}

  constructor(
    public _confirmation: ConfirmationService,
    public router : Router,
    public route: ActivatedRoute,
    public userService : UserService,
    public restaurantService : RestaurantService,
    public service: NotificationsService,
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

  teamAdd(){
    this.service.success('Member Added!', 'You now have a new member in your team!', {
       timeOut: 2000,
       showProgressBar: true,
       clickToClose: true
     });
    this.userService.teamAdd(this.worker, this.id).subscribe(restaurant => {
      this.restaurant = restaurant;
    })
    this.worker = {username: '', email: '', password: '', role: ''};
  }

  deleteThis(workId){
    this._confirmation.create('Delete Member', 'Are you sure?', {
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: true,
        confirmText: 'Delete',
        declineText: 'Close'
      })
      .subscribe((ans) => {
        if(ans.resolved) {
          this.service.error('Member Deleted!', 'This member is no longer from your team!', {
             timeOut: 1500,
             showProgressBar: true,
             clickToClose: true
           });
          this.userService.deleteThis(this.id, workId).subscribe(res => {
            this.restaurantService.getOneRestaurant(this.id).subscribe(restaurant =>  {
              this.restaurant = restaurant;
            });
          })
        }
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = {role:''};
  error: string;

  constructor(private router : Router, private authService : AuthService, public service: NotificationsService) {}

  ngOnInit() {
  }

  userSignUp() {
    console.log(this.user)
    if(this.user.role == "Owner"){
      this.service.success('Registration Complete!', 'You\'ll receive a confirmation email soon.', {
       timeOut: 3000,
       showProgressBar: true,
       clickToClose: true
     });
   }
   if(this.user.role == "Customer"){
     //navigate in here.
   }
    this.authService.userSignUp(this.user)
      .subscribe(res => this.user = {role: ''})
  }

}

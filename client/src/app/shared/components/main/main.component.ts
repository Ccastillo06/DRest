import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from 'angular2-notifications';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = {role:''};
  error: string;
  userLog: Object = {};

  constructor(private router : Router, private authService : AuthService, public service: NotificationsService) {}

  ngOnInit() {
  }

  userSignUp() {
    this.authService.userSignUp(this.user)
      .subscribe(
        (res) => {
          if(this.user.role == "Owner"){
            this.service.success('Registration Complete!', 'You\'ll receive a confirmation email soon.', {
               timeOut: 3000,
               showProgressBar: true,
               clickToClose: true
             });
           }
           if(this.user.role == "Customer"){
             this.service.success('Registration Complete!', 'You can now Log in the service!', {
              timeOut: 3000,
              showProgressBar: true,
              clickToClose: true
            });
           }
           this.user = {role: ''};
         },
         (error) => {
           this.service.error('Registration Failed!', 'Email is already in use!', {
            timeOut: 3000,
            showProgressBar: true,
            clickToClose: true
          });
        });
    }

    userLogin(){
      this.authService.userLogin(this.userLog)
        .subscribe(
          (res) => {
            console.log(res)
           },
           (error) => {
             this.service.error('Login Failed!', 'Wrong Email or password', {
              timeOut: 3000,
              showProgressBar: true,
              clickToClose: true
            });
          });
    }
  }

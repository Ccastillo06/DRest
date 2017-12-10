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
  showOwner: Boolean = false;
  validate: Boolean = false;

  constructor(private router : Router, private authService : AuthService, public service: NotificationsService) {}

  ngOnInit() {
  }

  showOwnerForm(){
    this.showOwner = !this.showOwner;
  }

  showValidation(){
    this.validate = !this.validate;
  }

  ownerSignUp(ownerForm) {
    this.user.role = 'Owner';
    this.showOwnerForm();
    this.service.success('Registration Complete!', 'You\'ll receive a confirmation email soon.', {
     timeOut: 3000,
     showProgressBar: true,
     clickToClose: true
   });
    this.authService.ownerSignUp(this.user)
      .subscribe(res => ownerForm.reset())
  }

}

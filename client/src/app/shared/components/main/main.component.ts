import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user = {role:''};
  error: string;
  showOwner: Boolean = false;

  constructor(private router : Router, private authService : AuthService) {}

  ngOnInit() {
  }

  showOwnerForm(){
    this.showOwner = true;
  }

  ownerSignUp(ownerForm) {
    this.user.role = 'Owner';
    this.authService.ownerSignUp(this.user).subscribe(
      (user) => {ownerForm.reset(); this.showOwner = false;},
      (error) => {this.error = error.message}
    );
}

}

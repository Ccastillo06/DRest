import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user: Object = {}
  constructor(private router : Router, private authService : AuthService,) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(
    (res) => { this.user = res },
    (error) => { this.goHome() })
  }

  userLogout(){
    this.authService.userLogout().subscribe(res => {
      this.goHome();
    })
  }

  goHome(){
    this.router.navigate(['/']);
  }

}

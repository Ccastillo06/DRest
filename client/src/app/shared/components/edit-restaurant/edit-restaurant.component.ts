import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { RestaurantService } from '../../services/restaurant.service';
import { FileUploader } from "ng2-file-upload";
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  restaurant = {name: '', description: '', openTime: '' , closeTime: ''};
  uploader: FileUploader;
  id: String;

  constructor(
    public service: NotificationsService,
    private router : Router,
    private route: ActivatedRoute,
    private userService : UserService,
    private restaurantService : RestaurantService,) {
      this.route.params.subscribe(params => {
         this.id = params['id'];
         this.restaurantService.getOneRestaurant(this.id).subscribe(restaurant =>  {
           this.restaurant = restaurant;
           this.uploader = new FileUploader({
             url: `http://localhost:3000/api/restaurant/edit/${restaurant._id}`
           });
         });
      });
  }

  ngOnInit() {
  }

  restEdit(){
    this.service.success('Product Edited!', 'Changed it from your menu or inventory!', {
       timeOut: 2000,
       showProgressBar: true,
       clickToClose: true
     });
    this.uploader.onBuildItemForm = (item, form) => {
        form.append('name', this.restaurant.name);
        form.append('description', this.restaurant.description);
        form.append('openTime', this.restaurant.openTime);
        form.append('closeTime', this.restaurant.closeTime);
      };
    this.uploader.uploadAll();
    setTimeout(function(){
      this.restaurantService.getOneRestaurant(this.id).subscribe(restaurant =>  {
        this.restaurant = restaurant;
      })
    }.bind(this), 2500);
    }

}

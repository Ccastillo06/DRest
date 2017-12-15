import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { environment }  from '../../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productUser = { role:''};
  productsArray: Array<Object> = [];
  newProduct = {name:'', description:'', classification:'', denomination:'', quantity: 0, inventory_price: 0, menu_price: 0};
  uploader: FileUploader = new FileUploader({
    url: `${environment.BASE_URL}/product/new`
  });
  showAll: Boolean = true;
  showFood: Boolean = false;
  foodArray: Array<Object> = [];
  showDrink: Boolean = false;
  drinksArray: Array<Object> = [];
  showUtil: Boolean = false;
  utilsArray: Array<Object> = [];
  constructor(
    public service: NotificationsService,
    public router : Router,
    public userService : UserService,
    public productService : ProductService,) {
    this.userService.fillUser().subscribe(user => {
      this.productUser = user
      if(this.productUser.role == 'Owner') {
        this.productService.getProducts().subscribe(products =>  {
          this.productsArray = products;
          this.foodArray = products.filter(e => {return e.classification=="Food"})
          this.drinksArray = products.filter(e => {return e.classification=="Drink"})
          this.utilsArray = products.filter(e => {return e.classification=="Util"})
        })
      } else {
        this.router.navigate(['lobby'])
      }
    });
  }

  ngOnInit() {
  }

  prodNew() {
    this.service.success('Product Added!', 'You can now add it to your menu or inventory!', {
       timeOut: 3000,
       showProgressBar: true,
       clickToClose: true
     });
    this.uploader.onBuildItemForm = (item, form) => {
        form.append('name', this.newProduct.name);
        form.append('description', this.newProduct.description);
        form.append('classification', this.newProduct.classification);
        form.append('denomination', this.newProduct.denomination);
        form.append('quantity', this.newProduct.quantity);
        form.append('inventory_price', this.newProduct.inventory_price);
        form.append('menu_price', this.newProduct.menu_price);
      };
    this.uploader.uploadAll();
    setTimeout(function(){
      this.productService.getProducts().subscribe(products =>  {
        this.productsArray = products;
        this.foodArray = products.filter(e => {return e.classification=="Food"})
        this.drinksArray = products.filter(e => {return e.classification=="Drink"})
        this.utilsArray = products.filter(e => {return e.classification=="Util"})
      })
    }.bind(this), 2500);
    this.newProduct = {name: '', description: '', classification: '' , denomination: '', quantity: 0, inventory_price: 0, menu_price: 0};
    }

    displayAll(){
      this.showAll = true;
      this.showFood = false;
      this.showDrink = false;
      this.showUtil = false;
    }

    displayFood(){
      this.showAll = false;
      this.showFood = true;
      this.showDrink = false;
      this.showUtil = false;
    }

    displayDrink(){
      this.showAll = false;
      this.showFood = false;
      this.showDrink = true;
      this.showUtil = false;
    }

    displayUtil(){
      this.showAll = false;
      this.showFood = false;
      this.showDrink = false;
      this.showUtil = true;
    }
}

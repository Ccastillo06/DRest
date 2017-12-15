import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { FileUploader } from "ng2-file-upload";
import { NotificationsService } from 'angular2-notifications';
import { ConfirmationService } from '@jaspero/ng-confirmations';
import { environment }  from '../../../../environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id:String = '';
  product = {name:'', description:'', classification:'', denomination:'', quantity: 0, inventory_price: 0, menu_price: 0};
  uploader: FileUploader;
  user = {};
  restaurant: String = '';

  constructor(
    private _confirmation: ConfirmationService,
    public service: NotificationsService,
    private router : Router, private route: ActivatedRoute,
    private userService : UserService,
    private productService : ProductService,) {
      this.route.params.subscribe(params => {
         this.id = params['id'];
         this.productService.getOneProduct(this.id).subscribe(product =>  {
           this.product = product;
           this.uploader = new FileUploader({
             url: `${environment.BASE_URL}/product/edit/${product._id}`
           });
           this.userService.fillUser().subscribe(user => {this.user = user; console.log(user)})
         });
    });
  }

  ngOnInit() {
  }

  prodEdit(){
    this.service.success('Product Edited!', 'Changed it from your menu or inventory!', {
       timeOut: 2000,
       showProgressBar: true,
       clickToClose: true
     });
    this.uploader.onBuildItemForm = (item, form) => {
        form.append('name', this.product.name);
        form.append('description', this.product.description);
        form.append('classification', this.product.classification);
        form.append('denomination', this.product.denomination);
        form.append('quantity', this.product.quantity);
        form.append('inventory_price', this.product.inventory_price);
        form.append('menu_price', this.product.menu_price);
      };
    this.uploader.uploadAll();
    setTimeout(function(){
      this.productService.getOneProduct(this.id).subscribe(product =>  {
        this.product = product;
      })
    }.bind(this), 2500);
    }

    prodDelete(){
      this._confirmation.create('Delete Product', 'Are you sure?', {
          overlay: true,
          overlayClickToClose: true,
          showCloseButton: true,
          confirmText: 'Delete',
          declineText: 'Close'
        })
        .subscribe((ans) => {
          if(ans.resolved) {
            this.service.error('Product Deleted!', 'You no longer have this product in your inventory', {
               timeOut: 2000,
               showProgressBar: true,
               clickToClose: true
             });
            this.productService.productDelete(this.id).subscribe(() => {
              this.router.navigate(['products'])
            })
          }
        })
     }

     prodToMenu(){
       this._confirmation.create('Add to Menu?', 'Confirm to include this item in menu', {
           overlay: true,
           overlayClickToClose: true,
           showCloseButton: true,
           confirmText: 'Confirm',
           declineText: 'Cancel'
         })
         .subscribe((ans) => {
           if(ans.resolved) {
             this.productService.addProdToMenu(this.id, this.restaurant).subscribe(() => {
               this.service.success('Added To Menu!', 'New item added to you restaurant menu!', {
                  timeOut: 1500,
                  showProgressBar: true,
                  clickToClose: true
                });
             })
           }
         })
     }
    }

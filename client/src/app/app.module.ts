import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './shared/routes';
import './rxjs.operators';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/main/main.component';
import { LobbyComponent } from './shared/components/lobby/lobby.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RestaurantComponent } from './shared/components/restaurant/restaurant.component';
import { EditRestaurantComponent } from './shared/components/edit-restaurant/edit-restaurant.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { EditProductComponent } from './shared/components/edit-product/edit-product.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { TeamComponent } from './shared/components/team/team.component';
import { TableComponent } from './shared/components/table/table.component';
import { OrderComponent } from './shared/components/order/order.component';
import { TicketComponent } from './shared/components/ticket/ticket.component';
import { TotalTicketsComponent } from './shared/components/total-tickets/total-tickets.component';
import { DataLobbyComponent } from './shared/components/data-lobby/data-lobby.component';
import { DataComponent } from './shared/components/data/data.component';


import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { RestaurantService } from './shared/services/restaurant.service';
import { ProductService } from './shared/services/product.service';
import { MenuService } from './shared/services/menu.service';
import { TableService } from './shared/services/table.service';
import { TicketService } from './shared/services/ticket.service';

import { ConfirmationService } from '@jaspero/ng-confirmations';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalModule } from 'ng2-bs3-modal';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { FileUploadModule } from 'ng2-file-upload';
import { JasperoConfirmationsModule } from '@jaspero/ng-confirmations';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LobbyComponent,
    FooterComponent,
    RestaurantComponent,
    EditRestaurantComponent,
    ProductsComponent,
    EditProductComponent,
    MenuComponent,
    TeamComponent,
    TableComponent,
    OrderComponent,
    TicketComponent,
    TotalTicketsComponent,
    DataLobbyComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    BsModalModule,
    Ng2PageScrollModule,
    FileUploadModule,
    JasperoConfirmationsModule,
    ChartsModule,
  ],
  providers: [
    AuthService,
    UserService,
    RestaurantService,
    ProductService,
    MenuService,
    TableService,
    ConfirmationService,
    TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }

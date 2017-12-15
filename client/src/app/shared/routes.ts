import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { EditRestaurantComponent } from './components/edit-restaurant/edit-restaurant.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { MenuComponent } from './components/menu/menu.component';
import { TeamComponent } from './components/team/team.component'
import { TableComponent } from './components/table/table.component'
import { OrderComponent } from './components/order/order.component'
import { TicketComponent } from './components/ticket/ticket.component';
import { TotalTicketsComponent } from './components/total-tickets/total-tickets.component';
import { DataComponent } from './components/data/data.component';
import { DataLobbyComponent } from './components/data-lobby/data-lobby.component';


export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'lobby', component: LobbyComponent},
  { path: 'restaurant/:name', component: RestaurantComponent},
  { path: 'edit/:id', component: EditRestaurantComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: EditProductComponent},
  { path: 'menu/:id', component: MenuComponent},
  { path: 'order/:id', component: OrderComponent},
  { path: 'team/:id', component: TeamComponent},
  { path: 'tables/:id', component: TableComponent},
  { path: 'ticket/:id', component: TicketComponent},
  { path: 'total/:id', component: TotalTicketsComponent},
  { path: 'data-lobby', component: DataLobbyComponent},
  {path: 'data/:id', component: DataComponent},
  { path: '**', redirectTo: '' }
];

import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'lobby', component: LobbyComponent},
  { path: 'restaurant/:name', component: RestaurantComponent},
  { path: '**', redirectTo: '' }
];

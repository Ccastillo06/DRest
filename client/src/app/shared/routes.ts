import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LobbyComponent } from './components/lobby/lobby.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'lobby', component: LobbyComponent},
  { path: '**', redirectTo: '' }
];

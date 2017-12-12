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

import { AuthService } from './shared/services/auth.service'
import { UserService } from './shared/services/user.service'
import { RestaurantService } from './shared/services/restaurant.service'

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalModule } from 'ng2-bs3-modal';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LobbyComponent,
    FooterComponent
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
  ],
  providers: [AuthService, UserService, RestaurantService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

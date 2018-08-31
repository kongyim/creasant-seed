import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

import { UserService } from './services/user.service';
import { CustomDatePipe } from './pipes/custom-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WelcomePageComponent,
    UsersPageComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

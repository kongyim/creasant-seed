import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { UserService } from './services/user.service';
import { CustomDatePipe } from './pipes/custom-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WelcomePageComponent,
    UserPageComponent,
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

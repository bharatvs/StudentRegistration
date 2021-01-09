import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { HomeComponent } from './home.component';
import { PagenotfoundComponent } from './pagenotfound.component';
import {UserService} from './oauth/user.service';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,


  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    LoginModule,
    ProfileModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    TabsModule.forRoot(),



  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

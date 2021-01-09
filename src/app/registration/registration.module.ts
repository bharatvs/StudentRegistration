import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'

import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing/registration-routing.module';



@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,RegistrationRoutingModule,ReactiveFormsModule
  ]
  
})
export class RegistrationModule { }

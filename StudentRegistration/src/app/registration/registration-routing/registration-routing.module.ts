import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { RegistrationComponent } from '../registration.component';


const appRoutes:Routes=[
  {path:'registration',component:RegistrationComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(appRoutes)
  ]
})
export class RegistrationRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router'
import { ProfileComponent } from './profile.component';


const approutes:Routes=[
  {path:'profile',component:ProfileComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(approutes)
  ]
})

export class ProfileRoutingModule { }

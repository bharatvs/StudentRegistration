import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PagenotfoundComponent } from './pagenotfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

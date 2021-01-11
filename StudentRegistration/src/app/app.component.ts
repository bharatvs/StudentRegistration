import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentRegistration';

  constructor(private _router:Router){}
  loggedIn(){
    this.title=localStorage.getItem('username')
    if(this.title){
      this.title=this.title.substring(0,this.title.lastIndexOf("@"));
    }

    return localStorage.getItem('token');

  }
  onLogout(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }
}

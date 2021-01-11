import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../oauth/user';
import { UserService } from '../oauth/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:IUser[]=[];
  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userservice.getUser().subscribe((users)=>{
      this.user=users;

    },(error:any)=>console.log(error));

  }
  onLogin(loginform:NgForm){

    const user=this.user.find(u=>u.username===loginform.value['useremail']&& u.password===loginform.value['password'])
    if(user){
      localStorage.setItem('token',user.id);
      localStorage.setItem('username',user.username);
      this.router.navigate(['home']);
    }
  }

}

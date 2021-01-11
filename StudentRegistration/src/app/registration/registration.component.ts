import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isBuffer } from 'util';
import { Customvalidator } from '../customvalidator';
import { IUser } from '../oauth/user';
import { UserService } from '../oauth/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  user: IUser = {
    username: null,
    password: null,
  };
  constructor(
    private fb: FormBuilder,
    private userservice: UserService,
    private router: Router,
    private toster:ToastrService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      useremail: ['', [Validators.required, Validators.email]],
      passwordGroup: this.fb.group(
        {
          password: ['', [Validators.required]],
          confirmpassword: ['', Validators.required],
        },
        { validator: this.matchPassword }
      ),
    });
  }

  matchPassword(group: AbstractControl): { [key: string]: any } | null {
    if (
      group.get('password').value === group.get('confirmpassword').value ||
      group.get('confirmpassword').pristine
    ) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
  registerUser() {
    this.user.username = this.registrationForm.get('useremail').value;
    this.user.password = this.registrationForm
      .get('passwordGroup')
      .get('password').value;
    this.userservice.addUser(this.user).subscribe(
      (userdata) => {
        localStorage.setItem('token', userdata.id);
        localStorage.setItem('username',userdata.username);
        this.router.navigate(['home']);
        this.toster.success('Successful','Registration');
      },
      (error: any) => console.log(error)
    );
  }
}

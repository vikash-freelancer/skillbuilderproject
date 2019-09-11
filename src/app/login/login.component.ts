import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {RegistrationModel} from '../model/registration.model';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: RegistrationModel = new RegistrationModel();
  errorMessage: string;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }
  gotopage(){
    this.router.navigate(['/signup']);
  }
  login() {
    this.authService.authenticate(this.user, (e) => {
      this.router.navigateByUrl('/profile');
      console.log(e);
      let resp: any;
      resp = e.principal;
      // this.user.fullName = 'ndh';
      if (resp) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(resp));
      }
    });
  }
}

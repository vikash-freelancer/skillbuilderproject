import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from '../model/registration.model';
import {RegistrationService } from '../service/registration.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Registration';
  registration: RegistrationModel = new RegistrationModel();
  errorMessage: string;
  constructor(private registrationService: RegistrationService,public router: Router) { }

  ngOnInit() {
  }
  addRegistration(f:NgForm): void {
    this.registrationService.addRegistration(this.registration).subscribe( data => {
          alert("Registration created successfully.");
          this.router.navigate(['/login']);
        },err => {
          console.log(err);
          this.errorMessage = 'username already exist';
        });
        f.resetForm();
      };
}

import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from '../model/registration.model';
import {RegistrationService } from '../service/registration.service';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Registration';
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
  });
  registration: RegistrationModel = new RegistrationModel();
  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }
  addRegistration(f:NgForm): void {
    this.registrationService.addRegistration(this.registration)
    
        .subscribe( data => {
          alert("Registration created successfully.");
         
        });
        f.resetForm();
      };
}

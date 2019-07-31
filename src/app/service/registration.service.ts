import { RegistrationModel } from '../model/registration.model';
import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class RegistrationService {

  constructor(private http:HttpClient) {}

  

//   public getCustomer() {
//     return this.http.get<Customer>('http://localhost:8002/customerIssue/getCustomer');
//   }


  public addRegistration(registration) {
    return this.http.post<RegistrationModel>('http://localhost:1234/156/registration',registration);
  }

}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationService } from './service/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

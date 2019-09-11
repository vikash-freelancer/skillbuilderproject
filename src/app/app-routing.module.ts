import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
const routes :Routes=[
   { path: '',  redirectTo: '/login', pathMatch: 'full' },
 {path:'signup', component:RegistrationComponent},
 {path:'login', component:LoginComponent},
 {path:'profile',component:ProfileComponent}
 
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponent =[RegistrationComponent,LoginComponent]

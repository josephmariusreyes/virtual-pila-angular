import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// PrimeNG modules used by the login component
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

import { LoginComponent } from './container/login/login.component';
//import { RegisterComponent } from './container/register/register.component';
import { UsersRoutingModule } from './users.routing';

@NgModule({
  declarations: [
    LoginComponent,
    //@notes
    //will add the register component later on to
    //add new company
    //add new users that can input customers to que
    //RegisterComponent
  ],
  imports: [
    UsersRoutingModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ]
})
export class UsersModule { }
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
//import { RegisterComponent } from './container/register/register.component';
import { NgModule } from '@angular/core';
import { LoginRedirectGuard } from '../../guard/login-redirect.guard';

export const routes: Routes = [
	{ path: '', component: LoginComponent, canActivate: [LoginRedirectGuard] },
	{ path: 'login', component: LoginComponent, canActivate: [LoginRedirectGuard] },
	//{ path: 'register', component: RegisterComponent, canActivate: [LoginRedirectGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
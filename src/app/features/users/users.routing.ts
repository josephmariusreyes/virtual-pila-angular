import { Routes } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { RegisterComponent } from './container/register/register.component';

export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
];

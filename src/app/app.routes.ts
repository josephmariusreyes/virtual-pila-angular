import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', redirectTo: 'user/login', pathMatch: 'full' 
  },
  {
    path: 'user',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'customer-line',
    loadChildren: () => import('./features/customer-quelist/customer-quelist.module').then(m => m.CustomerQuelistModule)
  },
];

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersModuleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    // Check if user is logged in
    const isLoggedIn = this.isUserLoggedIn();
    
    if (!isLoggedIn) {
      // Redirect to login page if not authenticated
      this.router.navigate(['/customer-que']);
      return false;
    }
    
    return true;
  }

  private isUserLoggedIn(): boolean {
    // Replace this with your actual authentication check
    // Common approaches:
    
    // Option 1: Check localStorage for auth token
    const token = localStorage.getItem('authToken');
    return token !== null && token !== '';
    
    // Option 2: Check sessionStorage
    // const token = sessionStorage.getItem('userSession');
    // return token !== null;
    
    // Option 3: If you have an auth service, use it instead:
    // return this.authService.isAuthenticated();
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from '../services/user.services';

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    // Check if user is already logged in
    return this.userService.loggedInUser$.pipe(
      map(user => {
        if (user) {
          // User is already logged in, redirect to customer-que
          this.router.navigate(['/customer-que']);
          return false;
        } else {
          // No user logged in, allow access to login page
          return true;
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from '../services/user.services';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerToQueGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    // Check if user is logged in using the UserService observable
    return this.userService.loggedInUser$.pipe(
      map(user => {
        if (user) {
          // User is logged in
          return true;
        } else {
          // No user logged in, redirect to customer-que
          this.router.navigate(['/customer-que']);
          return false;
        }
      })
    );
  }
}
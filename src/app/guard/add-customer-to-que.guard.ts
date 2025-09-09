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
    // Check if user is logged in using the UserService
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      return true;
    } else {
      // Optionally redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
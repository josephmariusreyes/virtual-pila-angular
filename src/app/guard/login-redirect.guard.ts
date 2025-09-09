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
    debugger;
    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      this.router.navigate(['/customer-que']);
      return false;
    } else {
      // No user logged in, allow access to login page
      return true;
    }

  }
}

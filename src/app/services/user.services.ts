import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { AdminUser } from "../models/admin-user.model";


@Injectable({ providedIn: 'root' })

export class UserService {
    
  private readonly USER_STORAGE_KEY = 'currentUser';

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): AdminUser | null {
    const userJson = localStorage.getItem(this.USER_STORAGE_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson) as AdminUser;
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        localStorage.removeItem(this.USER_STORAGE_KEY);
        return null;
      }
    }
    return null;
  }  
  
  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.get<AdminUser[]>('/app-admin-users.json').subscribe({
        next: (users) => {
          const matchedUser = users.find(user => 
            user.username === username && user.password === password
          );
          
          if (matchedUser) {
            // Create user object without password for security
            const { password, ...userWithoutPassword } = matchedUser;
            
            // Store user in localStorage
            localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(userWithoutPassword));
            return true;
          } else {
            return false;
          }
        },
        error: (error) => {
          console.error('Login error:', error);
          observer.next(false);
          observer.complete();
        }
      });
    });
  }

  logout(): void {
    localStorage.removeItem(this.USER_STORAGE_KEY);
  }
}
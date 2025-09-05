import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { AdminUser } from "../models/admin-user.model";


@Injectable({ providedIn: 'root' })

export class UserService {
  private currentUserSubject = new BehaviorSubject<AdminUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): AdminUser | null {
    return this.currentUserSubject.value;
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
            
            this.currentUserSubject.next(userWithoutPassword as AdminUser);
            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
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
    this.currentUserSubject.next(null);
  }
}
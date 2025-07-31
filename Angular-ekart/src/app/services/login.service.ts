import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer, User, UserLogin } from '../Models/User.Model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7226/api/Login';

  constructor(private http: HttpClient) {}

    private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
    isLoggedIn$ = this.loggedIn.asObservable();

  // This should return a token
  validateUser(user: UserLogin): Observable<Customer> {
    return this.http.post<Customer >(`${this.apiUrl}`, user);
  }

  // Save token in localStorage
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.loggedIn.next(true); 
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
     this.loggedIn.next(false);
  }
  saveUser(user: User): void {
    localStorage.setItem('user', user.userId.toString());
  }
  getUser(): string{
      return  localStorage.getItem('user');
  }
}

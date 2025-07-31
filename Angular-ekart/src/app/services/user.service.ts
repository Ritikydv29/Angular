import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../Models/User.Model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private apiUrl = 'https://localhost:7226/api/User'; 
  constructor(private http: HttpClient) {}
   registerUser(user: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(`${this.apiUrl}/register`, user);
  }
}

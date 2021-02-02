import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const AUTH_API = "/api/auth";

const jwtHelper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    // private jwtHelper: JwtHelperService
  ) {}

  login(credentials): Observable<any> {
    return this.http.post<any>(AUTH_API+"/login", credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    if(!!token)
      return !jwtHelper.isTokenExpired(token);
    
    return false;
  }
}

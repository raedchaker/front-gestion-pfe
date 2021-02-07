import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from 'jwt-decode';
import { EmailValidator } from '@angular/forms';

const AUTH_API = '/api/auth';

const jwtHelper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient // private jwtHelper: JwtHelperService
  ) {}

  login(credentials): Observable<any> {
    return this.http.post<any>(AUTH_API + '/login', credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    if (!!token) {
      return !jwtHelper.isTokenExpired(token);
    }

    return false;
  }

  getRole() {
    let token = localStorage.getItem('token');
    if (!!token) {
      const y = {
        ...jwtHelper.decodeToken(localStorage.getItem('token')),
      };

      return y.role;
    }

    return 'false';
  }
  getAuthenticatedUser() {
    const user = {
      ...jwtHelper.decodeToken(localStorage.getItem('token')),
    };

    return user;
  }
}

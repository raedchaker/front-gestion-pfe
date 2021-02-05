import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from "./authentication.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {

  constructor(
    private auth: AuthenticationService, 
    private router: Router,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( 
        !this.auth.isAuthenticated()
        ) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }
  
}

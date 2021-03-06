import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from "../authentication.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGardGuard implements CanActivate {

  constructor(
    private auth: AuthenticationService, 
    private router: Router,
    private toastr:ToastrService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( 
        !this.auth.isAuthenticated()
        ) {
        this.router.navigate(['/login']);
        this.toastr.error("Please login first !")
        return false;
      }

      return true;
  }
  
}

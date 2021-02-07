import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router,
    private toastr:ToastrService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( 
        this.auth.isAuthenticated()
        ) {
        this.router.navigate(['/subject/list-pfe']);
        this.toastr.error("you are already logged in !")
        return false;
      }

      return true;
  }
  
}

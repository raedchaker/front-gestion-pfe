import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.getRole()!=='student'){
        this.router.navigate(['login']);
        this.toastr.error("You need to be student ")
        return false;
      }
      return true;
  }
  
}

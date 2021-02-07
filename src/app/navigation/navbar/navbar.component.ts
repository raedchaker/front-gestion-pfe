import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private auth:AuthenticationService,private router:Router){

  }

  logged:any
  user:string

  ngOnInit() {
    this.logged=this.auth.getAuthenticatedUser()
    this.user=this.getAuthenticatedUser()
    console.log(this.user)
    
  }

  logout(){
    
    this.auth.logout()
    this.router.navigate(['login'])
  }

  getAuthenticatedUser(){
    return `${this.logged.firstname} ${this.logged.lastname}`
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/users',
    title: 'Users',
    icon: 'ni-single-02 text-yellow',
    class: '',
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'ni-tv-2 text-primary',
    class: '',
  },
  { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
  {
    path: '/subject/list-pfe',
    title: 'Liste des sujets PFE',
    icon: 'ni-bullet-list-67 text-red',
    class: '',
  },
  {
    path: '/subject/mes-encadrements',
    title: 'Mes Encadrements',
    icon: 'ni-paper-diploma text-red',
    class: '',
  },

  { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  {
    path: '/register',
    title: 'Register',
    icon: 'ni-circle-08 text-pink',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  user: any;
  logged: any;

  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit() {
    this.logged = this.auth.getAuthenticatedUser();
    this.user = this.getAuthenticatedUser();
    console.log(this.user);
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
  getAuthenticatedUser() {
    return `${this.logged.firstname} ${this.logged.lastname}`;
  }
  logout(){
    
    this.auth.logout()
    this.router.navigate(['login'])
  }
}

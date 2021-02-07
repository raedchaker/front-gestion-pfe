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
export const AdminROUTES: RouteInfo[] = [
  {
    path: '/admin/users',
    title: 'Liste des Utilisateurs',
    icon: 'ni-single-02 text-red-insat',
    class: '',
  },
  {
    path: '/admin/add-user',
    title: 'Ajouter Utilisateur',
    icon: 'ni-single-02 text-red-insat',
    class: '',
  },
  {
    path: '/subject/list-pfe',
    title: 'Liste des sujets PFE',
    icon: 'ni-bullet-list-67 text-red-insat',
    class: '',
  },
  {
    path: '/soutenance/ListSoutenance',
    title: 'Liste des Soutenances',
    icon: 'ni-bullet-list-67 text-red-insat',
    class: '',
  },
  {
    path: '/soutenance/AddSoutenance',
    title: 'Ajouter Soutenance',
    icon: 'ni-watch-time text-red-insat',
    class: '',
  },
];

export const StudentROUTES: RouteInfo[] = [
  {
    path: '/subject/list-pfe',
    title: 'Liste des sujets PFE',
    icon: 'ni-bullet-list-67 text-red-insat',
    class: '',
  },
  {
    path: '/subject/add-subject',
    title: 'Ajouter Sujet',
    icon: 'ni-single-copy-04 text-red-insat',
    class: '',
  },
  {
    path: '/soutenance/ListSoutenance',
    title: 'Liste des Soutenances',
    icon: 'ni-bullet-list-67 text-red-insat',
    class: '',
  },
];

export const teacherROUTES: RouteInfo[] = [
  {
    path: '/soutenance/ListSoutenance',
    title: 'Liste des Soutenances',
    icon: 'ni-bullet-list-67 text-red-insat',
    class: '',
  },
  {
    path: '/subject/list-pfe',
    title: 'Liste des sujets PFE',
    icon: 'ni-bullet-list-67 text-red-insat',
    class: '',
  },
  {
    path: '/subject/mes-encadrements',
    title: 'Mes Encadrements',
    icon: 'ni-paper-diploma text-red-insat',
    class: '',
  },
  {
    path: '/subject/teacher/old-pfe',
    title: 'Mes Ancien Encadrements',
    icon: 'ni-paper-diploma text-red-insat',
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
    const role = this.auth.getRole();
    if (role === 'admin') {
      this.menuItems = AdminROUTES.filter((menuItem) => menuItem);
    } else {
      if (role === 'student') {
        this.menuItems = StudentROUTES.filter((menuItem) => menuItem);
      } else {
        this.menuItems = teacherROUTES.filter((menuItem) => menuItem);
      }
    }
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
  getAuthenticatedUser() {
    return `${this.logged.firstname} ${this.logged.lastname}`;
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}

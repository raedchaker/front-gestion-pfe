import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGardGuard } from './authentication/auth-gard.guard';
import { AddSoutenanceComponent } from './Soutenance/add-soutenance/add-soutenance.component';
import {DetailSoutenanceComponent} from './Soutenance/detail-soutenance/detail-soutenance.component';
import { AuthGardGuard } from './authentication/guards/auth-gard.guard';
import { Error6Component } from './pages/error/error6.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./manage-users/manage-users.module').then((m) => m.ManageUsersModule),
  },
  {
    path: 'admin/AddSoutenance',
    component: AddSoutenanceComponent,
  },
  {
    path: 'admin/ListSoutenance',
    component: ListSoutenanceComponent
  },
  {
    path: 'admin/UpdateSoutenance/:id',
    component: DetailSoutenanceComponent,
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'subject',
    component: AdminComponent,
    loadChildren: () =>
      import('./subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'error',
    component: Error6Component,
  },
  {
    path : 'login',
    component : LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

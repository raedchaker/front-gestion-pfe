import { LoginGuardGuard } from './authentication/guards/login-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGardGuard } from './authentication/guards/auth-gard.guard';
import { Error6Component } from './pages/error/error6.component';
import { AdminGuardGuard } from './authentication/guards/admin-guard.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGardGuard,AdminGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoginGuardGuard]
  },
  {
    path: 'subject',
    component: AdminComponent,
    canActivate:[AuthGardGuard],
    loadChildren: () =>
      import('./subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'error',
    component: Error6Component,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'subject'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { LoginGuardGuard } from './authentication/guards/login-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGardGuard } from './authentication/guards/auth-gard.guard';
import { ErrorComponent } from './pages/error/error.component';

import { AdminGuardGuard } from './authentication/guards/admin-guard.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGardGuard, AdminGuardGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardGuard],
  },
  {
    path: 'subject',
    component: AdminComponent,
    canActivate: [AuthGardGuard],
    loadChildren: () =>
      import('./subject/subject.module').then((m) => m.SubjectModule),
  },
  {
    path: 'soutenance',
    component: AdminComponent,
    loadChildren: () =>
      import('./Soutenance/manage-soutenance.module').then(
        (m) => m.ManageSoutenanceModule
      ),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'subject',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

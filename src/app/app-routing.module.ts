import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGardGuard } from '../app/authentication/guards/auth-gard.guard';
import { AdminGuardGuard } from './authentication/guards/admin-guard.guard';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    loadChildren: () => import('./manage-users/manage-users.module').then((m) => m.ManageUsersModule),
    canActivate:  [AuthGardGuard, AdminGuardGuard],
  },
  { 
    path : 'login',
    component : LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

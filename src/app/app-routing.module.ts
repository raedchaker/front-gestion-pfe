import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGardGuard } from './authentication/guards/auth-gard.guard';
import { Error6Component } from './pages/error/error6.component';


const routes: Routes = [

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
    path: 'soutenance',
    component: AdminComponent,
    loadChildren: () =>
      import('./Soutenance/manage-soutenance.module').then((m) => m.ManageSoutenanceModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
   /* canActivate: [AuthGardGuard],*/
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

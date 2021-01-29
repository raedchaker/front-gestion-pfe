import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent,
    loadChildren: () => import('./manage-users/manage-users.module').then((m) => m.ManageUsersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

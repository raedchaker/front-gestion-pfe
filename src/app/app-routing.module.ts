import { ListSoutenanceComponent } from './Soutenance/list-soutenance/list-soutenance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AddSoutenanceComponent } from './Soutenance/add-soutenance/add-soutenance.component';

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
    component: ListSoutenanceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

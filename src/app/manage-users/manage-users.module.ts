import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { TablesComponent } from "./tables/tables.component";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersListComponent,TablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'users', component: UsersListComponent },

]),
  ]
})
export class ManageUsersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
    {    path: 'users', component: UsersListComponent,


    },
    {
    path:'',redirectTo:'users',pathMatch:'full',

},

]),
  ]
})
export class ManageUsersModule { }

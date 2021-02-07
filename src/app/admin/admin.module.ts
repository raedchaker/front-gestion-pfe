import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserComponenet } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [UsersListComponent, AddUserComponenet,UserProfileComponent, EditUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'users',
        component: UsersListComponent,
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'add-user' ,component:AddUserComponenet
      },
      {
        path: 'my-profile',component:UserProfileComponent
      },
      {
        path: 'edit-user/:id',component:EditUserComponent
      }


    ]),
  ],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserComponenet } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListComponent, AddUserComponenet],
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
        path: 'add-user',
        component: AddUserComponenet,
      },
    ]),
  ],
})
export class AdminModule {}

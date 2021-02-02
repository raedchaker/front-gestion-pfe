import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageUsersService } from 'src/app/manage-users/manage-users.service';
import { idText } from 'typescript';
import { User } from '../models/user.model';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users:User[]= []

  constructor(private userService:ManageUsersService,private toasterService:ToastrService) {

  }

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      (response)=>{console.log(response);
        this.users=response},
      (error)=>console.log(error)

    )
  }

  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe(
      ()=> {
        this.toasterService.success("User deleted successfuly","success")
        this.userService.getUsers().subscribe(
          (response)=>{
            this.users=response
          }

        )
      }
    )
    console.log(id)
  }

}

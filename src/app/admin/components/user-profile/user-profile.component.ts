import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { AdminService } from '../../admin.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private auth: AuthenticationService, private toaster:ToastrService,private adminService:AdminService) {}
  user: any;

  ngOnInit() {
    this.user=this.auth.getAuthenticatedUser()

  }
  changePassword(change:NgForm){
    if(change.value.r_new_pwd !== change.value.new_pwd){
      this.toaster.error("Passwords must be the same ")
      change.setValue({
        r_new_pwd: '', // or whatever fields you have
        new_pwd: '',
        old_pwd:change.value.old_pwd
      });
      return 
    }
    change.value["email"]=this.user.email
    this.adminService.changePassword(change.value).subscribe(
      (response)=>{
        console.log(response)
        this.toaster.success('Password changed successfully')
        change.setValue({
          r_new_pwd: '', // or whatever fields you have
          new_pwd: '',
          old_pwd:''
        });
        
      },
      (error)=>{
        this.toaster.error(error.error.message)
        change.setValue({
          r_new_pwd: '', // or whatever fields you have
          new_pwd: '',
          old_pwd:''
        });
        console.log(error.error.message)
      }
    )
    
    

  }
  

}

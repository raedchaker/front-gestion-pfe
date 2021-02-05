import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageUsersService } from '../../manage-users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponenet implements OnInit {

  constructor(private router:Router,private userService:ManageUsersService,private toastr:ToastrService) { }

  
  ngOnInit() {
  }
  exit(){
    this.router.navigate(['admin','users'])
  }
  
  addFile(){
    this.toastr.success("File added successfully !")
  }
  onSubmit( formulaire :NgForm){
    const values = formulaire.value
    if(values.role !== 'student'){
      delete values.insNumber
      
    }
    values.password= Math.random().toString(36).substring(2);
    values.password=values.password+''
    console.log(values)
    
    this.userService.addUser(values).
    subscribe(
      (resposnse)=>{
        console.log(resposnse)
        this.toastr.success("User created successfully")
      },
      (err)=>{
        console.log(typeof(err.error))
        this.toastr.error(err.error.message)
        console.log(err.error.message[0]);
        
      }
    )

    }


  renderInsNumber(form:NgForm){
    //console.log(form.value.role)
    if(form.value.role ==='student')
    return false
    return true
  }


}

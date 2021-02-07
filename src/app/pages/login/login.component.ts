import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  constructor(
    private authService : AuthenticationService,
    private router : Router,
  ) {}

  email : String;
  password : String;
  isSubmitError : Boolean;

  ngOnInit(): void {
    this.isSubmitError = false;
  }

  submitLogin(loginForm : NgForm): void{
    console.log(loginForm)
    this.authService.login(loginForm.value).subscribe(
      response => {
        // console.log(response)
        localStorage.setItem('token', response['access_token']);
        if (this.authService.getRole()==='admin')
        this.router.navigate(['admin'])
        else this.router.navigate(["/"]);
      },

      error => {
        this.isSubmitError = true;
      }
    )
  }
  ngOnDestroy() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../admin.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  user: User;
  id: string;

  constructor(
    private router: Router,
    private userService: AdminService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
      this.id = params.id;
      this.userService.getUser(params.id).subscribe(
        (res) => {
          console.log(res)
          this.user = res;
        },
        (err) => console.log(err)
      );
    });
  }
  exit() {
    this.router.navigate(['admin', 'users']);
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(this.id)
    form.value['cin']=Number(form.value['cin'])
    this.userService.editUser(this.id, form.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['admin','my-profile'])
      },
      (err) => {
        console.log(err.error.message);
        this.toastr.error(err.error.message)
      }
    );
  }
}

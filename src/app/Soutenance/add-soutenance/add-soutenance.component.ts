import { SoutenanceService } from './../soutenance.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {User} from '../../manage-users/models/user.model';

@Component({
  selector: 'app-add-soutenance',
  templateUrl: './add-soutenance.component.html',
  styleUrls: ['./add-soutenance.component.scss']
})
export class AddSoutenanceComponent implements OnInit {

  searchByInsNumberResult: User[] = [];
  constructor(
    private soutenanceService: SoutenanceService,
    private tostr: ToastrService,
    private router: Router
) { }

  ngOnInit(): void {
  }

 /* searchByInsNumber(inputInsNumber): void{
    let insNumber = inputInsNumber.value;
    insNumber =  Number(insNumber.trim());
    console.log(`le type de insNumber en param est `, typeof insNumber);
    if ( insNumber ){
      this.soutenanceService.serchUserByInsNumber(insNumber).subscribe(
        (users) => {
          console.log(users);
          this.searchByInsNumberResult = users;
         // console.log(this.searchByInsNumberResult);
        }
      );
    }
    else {
      this.searchByInsNumberResult = [];
    }


  }*/
  AjouterSoutenance(formulaire: NgForm): void {
    console.log(formulaire.value);
    this.soutenanceService.addSoutenance(formulaire.value).subscribe(
      (soutenance) => {
        console.log(soutenance);
        this.tostr.success(
          `La soutenance a été ajouté avec succès`
        );
        this.router.navigate(['admin/ListSoutenance']);
      },
      (error) => {
        console.log(error);
        this.tostr.error(
          'Problème au niveau de la base de données, veuillez contacter l admin'
        );
      }
    );

  }


}

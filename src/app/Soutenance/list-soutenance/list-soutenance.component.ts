import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SoutenanceService } from './../soutenance.service';
import { Component, OnInit } from '@angular/core';
import { SoutenanceModel } from '../Model/soutenance.model';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-list-soutenance',
  templateUrl: './list-soutenance.component.html',
  styleUrls: ['./list-soutenance.component.scss']
})
export class ListSoutenanceComponent implements OnInit {

  soutenances: SoutenanceModel[] = [];
  role = '';
  constructor(
    private soutenanceService: SoutenanceService,
    private router: Router,
    private toasterService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.soutenanceService.getSoutenances().subscribe(
      (response) => {
        console.log(response);
        this.soutenances = response;
      },
      (error) => console.log(error)
    );


  }

  modifierSoutenance(itemSoutenanceID: number): void {
    const link = ['admin/UpdateSoutenance', itemSoutenanceID];
    this.router.navigate(link);
  }

  supprimerSoutenance(itemSoutenance: SoutenanceModel): void {
    const id = itemSoutenance.id;
    this.soutenanceService.deleteSoutenance(id).subscribe(
      () => {
        this.toasterService.success('Soutenance deleted successfuly', 'success');
        this.soutenanceService.getSoutenances().subscribe(
          (response) => {
            this.soutenances = response;
          }
        );
        console.log('soutenance deteleted');
      });
  }
}

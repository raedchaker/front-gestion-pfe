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
  hide = false;

  constructor(
    private soutenanceService: SoutenanceService,
    private router: Router,
    private toasterService: ToastrService,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit(): void {
    this.soutenanceService.getSoutenances().subscribe(
      (response) => {
        console.log(response);
        this.soutenances = response;
        this.showHideButton();
      },
      (error) => console.log(error)
    );


  }
  showHideButton(): void{
    this.role = this.authenticationService.getRole();
    console.log('le role est ', this.role);
    if ( !this.role && this.role !== 'admin'){
      this.hide = true;
      console.log('je suis la est c est hide = ', this.hide);
    }
  }

  modifierSoutenance(itemSoutenanceID: number): void {
    const link = ['soutenance/UpdateSoutenance', itemSoutenanceID];
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

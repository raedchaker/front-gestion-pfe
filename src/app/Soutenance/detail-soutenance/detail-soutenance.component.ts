import { Component, OnInit } from '@angular/core';
import {SoutenanceService} from '../soutenance.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SoutenanceModel} from '../Model/soutenance.model';

@Component({
  selector: 'app-detail-soutenance',
  templateUrl: './detail-soutenance.component.html',
  styleUrls: ['./detail-soutenance.component.scss']
})
export class DetailSoutenanceComponent implements OnInit {

  soutenance: SoutenanceModel;

  constructor(    private soutenanceService: SoutenanceService,
                  private toaster: ToastrService,
                  private router: Router,
                  private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('params.id', params.id);
      this.soutenanceService.getSoutenanceByID(params.id).subscribe(
        (soutenance) => {
          console.log('la soutenance est ici ', soutenance);
          this.soutenance = soutenance;
        },
        (erreur) => {
          console.log( erreur );
          this.toaster.error('soutenance inexistante');
          this.router.navigate(['/admin/ListSoutenance']);
        }
      );
    });
  }

  modifierSoutenance(): void{
    this.soutenanceService.updateSoutenance(this.soutenance).subscribe(
      (response) => {
        this.toaster.info('Soutenance modifiée');
        this.router.navigate(['/admin/ListSoutenance']);
      },
      (error) => {
        console.log(error);
        this.toaster.error('Problème au niveau de la base de données, veuillez contacter l admin ' );
      },
      () => this.router.navigate(['/admin/ListSoutenance'])
    );
  }
}

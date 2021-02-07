import { Component, OnInit } from '@angular/core';
import {SoutenanceService} from '../soutenance.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SoutenanceModel} from '../Model/soutenance.model';
import {User} from '../../admin/models/user.model';
import {Sujet} from '../../subject/models/sujet';
import {AdminService} from '../../admin/admin.service';
import {SubjectService} from '../../subject/subject.service';

@Component({
  selector: 'app-detail-soutenance',
  templateUrl: './detail-soutenance.component.html',
  styleUrls: ['./detail-soutenance.component.scss']
})
export class DetailSoutenanceComponent implements OnInit {

  soutenance: SoutenanceModel;
  userResult: User;
  subjectResult: Sujet;


  constructor(    private soutenanceService: SoutenanceService,
                  private toaster: ToastrService,
                  private router: Router,
                  private activatedRoute: ActivatedRoute,
                  private adminService: AdminService,
                  private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('params.id', params.id);
      this.soutenanceService.getSoutenanceByID(params.id).subscribe(
        (soutenance) => {
          console.log('la soutenance est ici ', soutenance);
          this.soutenance = soutenance;
          this.searchUserByInsNumber(soutenance.insNumber);
        },
        (erreur) => {
          console.log( erreur );
          this.toaster.error('soutenance inexistante');
          this.router.navigate(['/admin/ListSoutenance']);
        }
      );
    });
  }

  searchUserByInsNumber(insNumber: number): void {
    this.adminService.getUserByInsNumber(insNumber).subscribe(
      (user) => {
        console.log(user);
        this.userResult = user;
        this.findSujetByStudent(user.id);
      }, (error) => {
        console.log('Etudiant inexistant');
        this.toaster.error('Etudiant inexistant');
      }
    );
  }
  findSujetByStudent(studentID): void{
    this.subjectService.getSubjectsByStudentId(studentID).subscribe(
      (response) => {
        this.subjectResult = response;
      },
      (error) => this.toaster.error(
        'pas de sujet pour cet etudiant'
      )
    );
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

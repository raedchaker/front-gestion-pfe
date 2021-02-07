import { SoutenanceService } from './../soutenance.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AdminService} from '../../admin/admin.service';
import {User} from '../../admin/models/user.model';
import {SubjectService} from '../../subject/subject.service';
import {Sujet} from '../../subject/models/sujet';


@Component({
  selector: 'app-add-soutenance',
  templateUrl: './add-soutenance.component.html',
  styleUrls: ['./add-soutenance.component.scss']
})
export class AddSoutenanceComponent implements OnInit {

 userResult: User;
 subjectResult: Sujet;
  constructor(
    private soutenanceService: SoutenanceService,
    private tostr: ToastrService,
    private router: Router,
    private adminService: AdminService,
    private subjectService: SubjectService
) { }

  ngOnInit(): void {
  }

 searchUserByInsNumber(inputInsNumber): void {
    let insNumber = inputInsNumber.value;
    insNumber = Number(insNumber.trim());
    this.adminService.getUserByInsNumber(insNumber).subscribe(
      (user) => {
        console.log(user);
        this.userResult = user;
        this.findSujetByStudent(user.id);
      }, (error) => {
        console.log('Etudiant inexistant');
        this.tostr.error('Etudiant inexistant');
      }
    );
  }
  findSujetByStudent(studentID): void{
    this.subjectService.getSubjectsByStudentId(studentID).subscribe(
      (response) => {
        this.subjectResult = response;
      },
      (error) => this.tostr.error(
        'pas de sujet pour cet etudiant'
      )
    );
  }
  AjouterSoutenance(formulaire: NgForm): void {
    console.log(formulaire.value);
    this.soutenanceService.addSoutenance(formulaire.value).subscribe(
      (soutenance) => {
        console.log(soutenance);
        this.tostr.success(
          `La soutenance a été ajouté avec succès`
        );
        this.router.navigate(['soutenance/ListSoutenance']);
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

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss'],
})
export class AddSubjectComponent implements OnInit {
  message = '';
  constructor(private subjectService: SubjectService, private router: Router) {}

  ngOnInit(): void {}
  processForm(add_subject: NgForm) {
    this.subjectService.addSubject(add_subject.value).subscribe(
      (response) => {
        //should be redirected to the list page
        this.message = 'Sujet ajouté avec succès!';
      },
      (erreur) => {
        this.message = 'Vérifier les informations!!';
        console.log(erreur);
      }
    );
  }
}
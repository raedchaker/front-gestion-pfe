import { Sujet } from '../models/sujet';
import { SubjectService } from '../subject.service';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss'],
})
export class SubjectDetailComponent implements OnInit {
  subjectId: string = '';
  mySubject: Sujet = new Sujet();
  url = environment.url + 'uploads/';
  is_admin: Boolean = false;
  is_my_subject: Boolean = false;
  is_valid_subject: Boolean = false;
  rapport_is_uploaded: Boolean = false;
  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    public sanitizer: DomSanitizer
  ) {} 
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  ngOnInit(): void {
    const authenticated_user = this.authenticationService.getAuthenticatedUser();
    this.route.params.subscribe((param) => {
      this.subjectId = param.id;
      this.subjectService
        .getSubjectById(this.subjectId)
        .subscribe((subject) => {
          this.mySubject = subject;
          // if (this.mySubject.rapport) {
          //   this.pdfSrc = this.url + this.mySubject.rapport;
          //   this.rapport_is_uploaded = true;
          // }
          if (authenticated_user.email == this.mySubject.student.email) {
            this.is_my_subject = true;
          }
          if (this.mySubject.status == 'Validé') {
            this.is_valid_subject = true;
          }
        });
    });

    const user_role = this.authenticationService.getRole();
    if (user_role == 'admin') {
      this.is_admin = true;
    }
  }
  download() {
    var file = new Blob([this.pdfSrc], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(file);
    var a = document.createElement('a');
    a.href = fileURL;
    a.target = '_blank';
    a.download = 'bill.pdf';
    document.body.appendChild(a);
    a.click();
  }

  validate() {
    this.subjectService.validateSubject(this.mySubject.id).subscribe(
      (response) => {
        console.log('subject validated with success');
        this.toastr.error('sujet validé avec success');
        this.is_valid_subject = true;
      },
      (erreur) => {
        console.log(erreur);
      }
    );
  }

  upload() {}
}

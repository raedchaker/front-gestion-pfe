import { Sujet } from '../models/sujet';
import { SubjectService } from '../subject.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss'],
})
export class SubjectDetailComponent implements OnInit {
  subjectId: string = '';
  mySubject: Sujet = new Sujet();
  url = environment.url+'uploads/'
  constructor(
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    public sanitizer: DomSanitizer,
  ) {}
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.subjectId = param.id;
      this.subjectService
        .getSubjectById(this.subjectId)
        .subscribe((subject) => {
          this.mySubject = subject;
          if(this.mySubject.rapport){
            this.pdfSrc = this.url + this.mySubject.rapport;
          }
        });
    });
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
}

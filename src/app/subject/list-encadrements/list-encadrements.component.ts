import { Component, OnInit } from '@angular/core';
import { Sujet } from '../models/sujet';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-list-encadrements',
  templateUrl: './list-encadrements.component.html',
  styleUrls: ['./list-encadrements.component.scss'],
})
export class ListEncadrementsComponent implements OnInit {
  listEncadrements: Sujet[] = [];
  teacherId: string = '';
  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
      this.teacherId = localStorage.getItem('id');
      this.subjectService.getThisYearSubjectsByTeacherId(this.teacherId).subscribe(res=>{
        this.listEncadrements = res.slice();
        this.listEncadrements = this.listEncadrements.filter(s=> s.status == 'Validé')
      })
  }
}

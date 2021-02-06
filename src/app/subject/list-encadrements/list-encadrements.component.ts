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
  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.getAllPfeSubjects().subscribe((res) => {
      this.listEncadrements = res.slice();
    });
  }
}

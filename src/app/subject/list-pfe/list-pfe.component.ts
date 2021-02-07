import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Sujet } from '../models/sujet';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-list-pfe',
  templateUrl: './list-pfe.component.html',
  styleUrls: ['./list-pfe.component.css'],
})
export class ListPfeComponent implements OnInit {
  listSubjects: Sujet[] = [];
  filteredSubjects: Sujet[] = [];
  year = new FormControl('');
  p: number = 0; // page to point on
  yearList: string[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.getAllPfeSubjects().subscribe((res) => {
      this.listSubjects = res.slice();
      this.listSubjects = this.listSubjects.sort((s1,s2)=> -s1.year.localeCompare(s2.year));
      this.listSubjects = this.listSubjects.filter(s=> s.status == 'Validé');
      this.listSubjects.forEach(s=> this.yearList.push(s.year));
      this.filteredSubjects = this.listSubjects.slice();
      this.yearList= [...new Set(this.yearList)];
    });
  }
  filter(){
    const filters: string[] = this.year.value;
    this.filteredSubjects = this.listSubjects.filter(s=> filters.some(y=> y === s.year))
  }

  resetFilters(){
    this.year.setValue('');
    this.filteredSubjects = this.listSubjects.slice();
  }
}

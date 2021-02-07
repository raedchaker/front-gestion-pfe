import { SubjectService } from './../subject.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Sujet } from '../models/sujet';


@Component({
  selector: 'app-liste-pfe-enseignant',
  templateUrl: './liste-pfe-enseignant.component.html',
  styleUrls: ['./liste-pfe-enseignant.component.scss']
})
export class ListePfeEnseignantComponent implements OnInit {

  listSubjects: Sujet[]=[];
  //listSubjectsByYear: [Sujet[]];
  showYear: boolean[]=[];
  teacherId: string = '';
  year = new FormControl();
  p:number = 0; // page to point on
  yearList: string[] = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.teacherId = localStorage.getItem('id');
    this.subjectService.getSubjectsByTeacherId(this.teacherId).subscribe(res=>{
    //this.subjectService.getAllPfeSubjects().subscribe(res=>{
      this.listSubjects = res.slice();
      this.listSubjects = this.listSubjects.sort((s1,s2)=> -s1.year.localeCompare(s2.year));
      //this.listSubjects = this.listSubjects.filter(s=> s.status == 'Validé');
      this.listSubjects.forEach(s=> this.yearList.push(s.year));
      this.yearList= [...new Set(this.yearList)];
    })
  }

  filter(y: string){
    return this.listSubjects.filter(s=> s.year == y);
  }
}

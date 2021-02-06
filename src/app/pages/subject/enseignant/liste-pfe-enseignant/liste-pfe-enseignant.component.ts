import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/_models/sujet';
import { Annee } from 'src/app/_models/annee';
import { SujetPfeService } from 'src/app/_service/sujet-pfe.service';

@Component({
  selector: 'app-liste-pfe-enseignant',
  templateUrl: './liste-pfe-enseignant.component.html',
  styleUrls: ['./liste-pfe-enseignant.component.css']
})
export class ListePfeEnseignantComponent implements OnInit {

  listSubjects: Sujet[]=[];
  //listSubjectsByYear: [Sujet[]];
  showYear: boolean[]=[];
  anneeList: Annee[]=[];
  teacherId: string = '';
  year = new FormControl();
  p:number = 0; // page to point on
  yearList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private subjectService: SujetPfeService) { }

  ngOnInit(): void {
    this.teacherId = localStorage.getItem('id');
    this.subjectService.getSubjectsByTeacherId(this.teacherId).subscribe(res=>{
      this.listSubjects = res.slice();
    })
  }
}

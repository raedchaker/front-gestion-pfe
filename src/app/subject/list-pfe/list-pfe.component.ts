import { Annee } from '../models/annee';
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
  anneeList: Annee[] = [];
  year = new FormControl();
  p: number = 0; // page to point on
  yearList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.getAllPfeSubjects().subscribe((res) => {
      this.listSubjects = res.slice();
      console.log(res);
    });
  }
}
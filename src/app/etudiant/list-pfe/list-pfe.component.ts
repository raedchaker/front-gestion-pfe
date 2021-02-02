import { Sujet } from './../../_models/sujet';
import { Annee } from './../../_models/annee';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-pfe',
  templateUrl: './list-pfe.component.html',
  styleUrls: ['./list-pfe.component.css']
})
export class ListPfeComponent implements OnInit {

  pfe: Sujet = new Sujet();
  anneeList: Annee[]=[];
  year = new FormControl();
  yearList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
    this.pfe.annee="2020/2021";
    this.pfe.etudiant="raed";
    this.pfe.description="projet pfe";
    this.pfe.encadrant="professor";
    this.pfe.entreprise="entreprise pfe";
    this.pfe.title="sthg pfe";
    this.pfe.filiere="GL";
  }

}

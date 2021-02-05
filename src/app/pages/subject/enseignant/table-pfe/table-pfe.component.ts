import { Component, Input, OnInit } from '@angular/core';
import { Sujet } from 'src/app/_models/sujet';

@Component({
  selector: 'app-table-pfe',
  templateUrl: './table-pfe.component.html',
  styleUrls: ['./table-pfe.component.scss']
})
export class TablePfeComponent implements OnInit {

  p=0;
  @Input() listSubjects: Sujet[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}

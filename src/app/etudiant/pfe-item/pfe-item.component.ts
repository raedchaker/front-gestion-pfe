import { Sujet } from './../../_models/sujet';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pfe-item',
  templateUrl: './pfe-item.component.html',
  styleUrls: ['./pfe-item.component.css']
})
export class PfeItemComponent implements OnInit {


  @Input() pfe: Sujet;

  constructor() { }

  ngOnInit(): void {
  }

}

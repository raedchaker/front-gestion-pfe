import { Component, Input, OnInit } from '@angular/core';
import { Sujet } from 'src/app/_models/sujet';

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

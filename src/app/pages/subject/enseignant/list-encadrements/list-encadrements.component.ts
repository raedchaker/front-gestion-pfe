import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/_models/sujet';
import { SujetPfeService } from 'src/app/_service/sujet-pfe.service';

@Component({
  selector: 'app-list-encadrements',
  templateUrl: './list-encadrements.component.html',
  styleUrls: ['./list-encadrements.component.scss']
})
export class ListEncadrementsComponent implements OnInit {

  listEncadrements: Sujet[]=[];
  constructor(private subjectService: SujetPfeService) { }

  ngOnInit(): void {

    this.subjectService.getAllPfeSubjects().subscribe(res=>{
      this.listEncadrements = res.slice();
    })
  }

}

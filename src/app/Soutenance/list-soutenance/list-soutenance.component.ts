import { Router } from '@angular/router';

import { SoutenanceService } from './../soutenance.service';
import { Component, OnInit } from '@angular/core';
import { Soutenance } from '../Model/soutenance';

@Component({
  selector: 'app-list-soutenance',
  templateUrl: './list-soutenance.component.html',
  styleUrls: ['./list-soutenance.component.scss']
})
export class ListSoutenanceComponent implements OnInit {

  soutenances: Soutenance[] =[]

  constructor(
    private soutenanceService:SoutenanceService,
    private router:Router,

    ) { }

  ngOnInit(): void {
    this.soutenances = this.soutenanceService.soutenances
    this.soutenances.push(new Soutenance(1,"sujet1","Missaoui","Syrine","Riadh Robbana","Aymen Sellaouti","sana Sassi",new Date(2021,1,31),null,"salle1"));
  }
  modifierSoutenance(itemSoutenance: Soutenance){
      this.router.navigate(['admin/AddSoutenance'])
  }
  supprimerSoutenance(itemSoutenance: Soutenance){
console.log("soutenance deteleted")
  }
}

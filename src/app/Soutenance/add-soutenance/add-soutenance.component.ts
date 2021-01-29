import { SoutenanceService } from './../soutenance.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-soutenance',
  templateUrl: './add-soutenance.component.html',
  styleUrls: ['./add-soutenance.component.scss']
})
export class AddSoutenanceComponent implements OnInit {

  constructor(private soutenanceService: SoutenanceService) { }

  ngOnInit(): void {
  }

  AjouterSoutenance(formulaire:NgForm){
    this.soutenanceService.addSoutenance(formulaire.value);
    console.log("le tableau contient",this.soutenanceService.soutenances);

  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSoutenanceComponent } from './add-soutenance/add-soutenance.component';
import { RouterModule } from '@angular/router';
import { ListSoutenanceComponent } from './list-soutenance/list-soutenance.component';
import { DetailSoutenanceComponent } from './detail-soutenance/detail-soutenance.component';
import {FormsModule} from '@angular/forms';


@NgModule({declarations: [],
  imports: [ FormsModule,
    CommonModule, RouterModule.forChild([
      {path: 'AddSoutenance', component: AddSoutenanceComponent},
      {path: 'ListSoutenance', component: ListSoutenanceComponent},
      {path: 'UpdateSoutenance/:id', component: DetailSoutenanceComponent},
    ]),
  ]
})
export class ManageSoutenanceModule { }

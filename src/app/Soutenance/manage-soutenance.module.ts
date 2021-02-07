import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSoutenanceComponent } from './add-soutenance/add-soutenance.component';
import { RouterModule } from '@angular/router';
import { ListSoutenanceComponent } from './list-soutenance/list-soutenance.component';
import { DetailSoutenanceComponent } from './detail-soutenance/detail-soutenance.component';
import {FormsModule} from '@angular/forms';


@NgModule({declarations: [AddSoutenanceComponent, ListSoutenanceComponent, DetailSoutenanceComponent],
  imports: [
    CommonModule, RouterModule.forChild([
      {path: 'admin/AddSoutenance', component: AddSoutenanceComponent},
      {path: 'admin/ListSoutenance', component: ListSoutenanceComponent},
      {path: 'admin/UpdateSoutenance/:id', component: DetailSoutenanceComponent},
    ]), FormsModule,
  ]
})
export class ManageSoutenanceModule { }

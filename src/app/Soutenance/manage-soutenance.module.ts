import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSoutenanceComponent } from './add-soutenance/add-soutenance.component';
import { RouterModule } from '@angular/router';
import { DetailSoutenanceComponent } from './detail-soutenance/detail-soutenance.component';
import { ListSoutenanceComponent } from './list-soutenance/list-soutenance.component';


@NgModule({declarations: [AddSoutenanceComponent, DetailSoutenanceComponent, ListSoutenanceComponent],
  imports: [
    CommonModule,    RouterModule.forChild([
      { path: 'users', component: AddSoutenanceComponent },
    ]),
  ]
})
export class ManageSoutenanceModule { }

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePfeEnseignantComponent } from './liste-pfe-enseignant/liste-pfe-enseignant.component';
import { ListEncadrementsComponent } from './list-encadrements/list-encadrements.component';
import { TablePfeComponent } from './table-pfe/table-pfe.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListePfeEnseignantComponent, 
    ListEncadrementsComponent, 
    TablePfeComponent,
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    NgxPaginationModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnseignantModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPfeComponent } from './list-pfe/list-pfe.component';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { PfeItemComponent } from './pfe-item/pfe-item.component';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';




@NgModule({
  declarations: [ListPfeComponent, PfeItemComponent],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EtudiantModule { }

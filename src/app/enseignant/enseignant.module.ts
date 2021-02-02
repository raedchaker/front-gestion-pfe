import { EnseignantRoutingModule } from './enseignant-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePfeEnseignantComponent } from './liste-pfe-enseignant/liste-pfe-enseignant.component';



@NgModule({
  declarations: [ ListePfeEnseignantComponent],
  imports: [
    CommonModule,
    EnseignantRoutingModule
  ]
})
export class EnseignantModule { }

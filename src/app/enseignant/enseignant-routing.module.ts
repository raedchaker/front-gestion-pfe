import { ListePfeEnseignantComponent } from './liste-pfe-enseignant/liste-pfe-enseignant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const EnseignantRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list-pfe', 
    pathMatch: 'full'
  },
  {
    path: 'list-pfe',
    component: ListePfeEnseignantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(EnseignantRoutes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }

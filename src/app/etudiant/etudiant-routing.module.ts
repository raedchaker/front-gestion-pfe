import { ListPfeComponent } from './list-pfe/list-pfe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const EtudiantRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list-pfe', 
    pathMatch: 'full'
  },
  {
    path: 'list-pfe',
    component: ListPfeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(EtudiantRoutes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }

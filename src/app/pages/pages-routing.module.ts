import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantModule } from '../etudiant/etudiant.module';
import { MainComponent } from './main/main.component';

export function loadEtudiantModule() {
  return EtudiantModule;
}


const MainRoutes: Routes = [
  {
    path: '',
    redirectTo: 'etudiant', 
    pathMatch: 'full'
  },
  {
    path: 'etudiant',
    children:[{
      path:'',
      loadChildren: ()=> import(`../etudiant/etudiant.module`).then(m=>m.EtudiantModule)
    }],
  },
  {
    path: 'enseignant',
    children:[{
      path:'',
      loadChildren: ()=> import(`../enseignant/enseignant.module`).then(m=>m.EnseignantModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(MainRoutes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }

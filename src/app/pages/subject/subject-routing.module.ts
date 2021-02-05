import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';

const SubjectRoutes: Routes = [
  {
    path: '',
    redirectTo: 'etudiant', 
    pathMatch: 'full'
  },
  {
    path: 'etudiant',
    children:[{
      path:'',
      loadChildren: ()=> import(`./etudiant/etudiant.module`).then(m=>m.EtudiantModule)
    }],
  },
  {
    path: 'enseignant',
    children:[{
      path:'',
      loadChildren: ()=> import(`./enseignant/enseignant.module`).then(m=>m.EnseignantModule)
    }],
  },
  {
    path: 'subject-details/:id',
    component: SubjectDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(SubjectRoutes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }

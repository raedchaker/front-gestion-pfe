import { ListePfeEnseignantComponent } from './liste-pfe-enseignant/liste-pfe-enseignant.component';
import { ListEncadrementsComponent } from './list-encadrements/list-encadrements.component';
import { ListPfeComponent } from './list-pfe/list-pfe.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';


const subjectRoutes: Routes = [
    { path: 'add-subject', component: AddSubjectComponent },
    { path: 'list-pfe', component: ListPfeComponent },
    { path: 'mes-encadrements', component: ListEncadrementsComponent },
    { path: 'subject-details/:id', component: SubjectDetailComponent },
    {
        path: '',
        redirectTo: 'list-pfe',
        pathMatch: 'full',
    },
    {
        path: 'teacher/old-pfe',
        component: ListePfeEnseignantComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(subjectRoutes)],
    exports: [RouterModule],
})
export class SubjectRoutingModule { }

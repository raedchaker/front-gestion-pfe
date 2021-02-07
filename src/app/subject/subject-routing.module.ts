import { TeacherGuardGuard } from './../authentication/guards/teacher-guard.guard';
import { ListePfeEnseignantComponent } from './liste-pfe-enseignant/liste-pfe-enseignant.component';
import { ListEncadrementsComponent } from './list-encadrements/list-encadrements.component';
import { ListPfeComponent } from './list-pfe/list-pfe.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { StudentGuardGuard } from '../authentication/guards/student-guard.guard';


const subjectRoutes: Routes = [
    {
        path: 'add-subject',
        component: AddSubjectComponent,
        canActivate:[StudentGuardGuard]
    },
    {
        path: 'list-pfe',
        component: ListPfeComponent
    },
    {
        path: 'mes-encadrements',
        component: ListEncadrementsComponent,
        canActivate:[TeacherGuardGuard]
    },
    {
        path: 'subject-details/:id',
        component: SubjectDetailComponent
    },
    {
        path: '',
        redirectTo: 'list-pfe',
        pathMatch: 'full',
    },
    {
        path: 'teacher/old-pfe',
        component: ListePfeEnseignantComponent,
        canActivate:[TeacherGuardGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(subjectRoutes)],
    exports: [RouterModule],
})
export class SubjectRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ListEncadrementsComponent } from './list-encadrements/list-encadrements.component';
import { ListPfeComponent } from './list-pfe/list-pfe.component';
import { PfeItemComponent } from './pfe-item/pfe-item.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { TablePfeComponent } from './table-pfe/table-pfe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import { StudentGuardGuard } from '../authentication/guards/student-guard.guard';

@NgModule({
  declarations: [
    AddSubjectComponent,
    ListEncadrementsComponent,
    ListPfeComponent,
    PfeItemComponent,
    SubjectDetailComponent,
    TablePfeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PdfViewerModule,
    MatSelectModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: 'add-subject',
        component: AddSubjectComponent,
        canActivate: [StudentGuardGuard],
      },
      { path: 'list-pfe', component: ListPfeComponent },
      { path: 'mes-encadrements', component: ListEncadrementsComponent },
      { path: 'subject-details/:id', component: SubjectDetailComponent },
      {
        path: '',
        redirectTo: 'list-pfe',
        pathMatch: 'full',
      },
    ]),
  ],
})
export class SubjectModule {}

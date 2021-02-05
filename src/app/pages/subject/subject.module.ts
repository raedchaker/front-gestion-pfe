import { NgxPaginationModule } from 'ngx-pagination';
import { SubjectRoutingModule } from './subject-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    SubjectDetailComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    NgxPaginationModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule
  ]
})
export class SubjectModule { }

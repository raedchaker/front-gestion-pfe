import { AuthenticationModule } from './../authentication/authentication.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubHeaderComponent } from './../navigation/sub-header/sub-header.component';
import { FooterComponent } from './../navigation/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './../navigation/navbar/navbar.component';
import { SidebarComponent } from './../navigation/sidebar/sidebar.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SubjectDetailComponent } from './subject/subject-detail/subject-detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    SubHeaderComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    PdfViewerModule
  ]
})
export class PagesModule { }

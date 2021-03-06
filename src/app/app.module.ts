import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './pages/admin/admin.component';
import { SubHeaderComponent } from './navigation/sub-header/sub-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AddSoutenanceComponent } from './Soutenance/add-soutenance/add-soutenance.component';
import { ListSoutenanceComponent } from './Soutenance/list-soutenance/list-soutenance.component';
import { DetailSoutenanceComponent } from './Soutenance/detail-soutenance/detail-soutenance.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthHttpInterceptor } from './authentication/interceptors/auth.interceptor';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    SubHeaderComponent,
    ErrorComponent,
    LoginComponent,
    AddSoutenanceComponent,
    ListSoutenanceComponent,
    DetailSoutenanceComponent,
    ErrorComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthHttpInterceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SidebarComponent} from './navigation/sidebar/sidebar.component';
import { NavbarComponent } from "./navigation/navbar/navbar.component";
import { FooterComponent} from "./navigation/footer/footer.component"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './pages/admin/admin.component';
import { SubHeaderComponent } from './navigation/sub-header/sub-header.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationModule } from './authentication/authentication.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    SubHeaderComponent,
    LoginComponent

    ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SidebarComponent} from './navigation/sidebar/sidebar.component';
import { NavbarComponent } from "./navigation/navbar/navbar.component";
import { FooterComponent} from "./navigation/footer/footer.component"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './pages/admin/admin.component';
import { SubHeaderComponent } from './navigation/sub-header/sub-header.component';
import { AddSoutenanceComponent } from './Soutenance/add-soutenance/add-soutenance.component';
import { ListSoutenanceComponent } from './Soutenance/list-soutenance/list-soutenance.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    SubHeaderComponent,
    AddSoutenanceComponent,
    ListSoutenanceComponent

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

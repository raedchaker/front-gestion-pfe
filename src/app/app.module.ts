import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SidebarComponent} from './navigation/sidebar/sidebar.component';
import { NavbarComponent } from "./navigation/navbar/navbar.component";
import { FooterComponent} from "./navigation/footer/footer.component"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './pages/admin/admin.component';
import { SubHeaderComponent } from './navigation/sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AdminComponent,
    FooterComponent,
    SubHeaderComponent

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

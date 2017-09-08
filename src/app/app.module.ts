import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { approuting } from './app.routing';
import {Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { DashboardV1Component } from './dashboard/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './dashboard/dashboard-v2/dashboard-v2.component';

import { CkeditorComponent } from './editor/ckeditor/ckeditor.component';
import { WysiwygEditorComponent } from './editor/wysiwyg-editor/wysiwyg-editor.component';
import { DragulaComponent } from './drag-drop/dragula/dragula.component';
import { SortableComponent } from './drag-drop/sortable/sortable.component';
import { LineaComponent } from './icons/linea/linea.component';
import { MaterialComponent } from './icons/material/material.component';
import { SimpleLineIconsComponent } from './icons/simple-line-icons/simple-line-icons.component';
import { FontawesomeComponent } from './icons/fontawesome/fontawesome.component';
import { GoogleComponent } from './maps/google/google.component';
import { GoogleFullscreenComponent } from './maps/google-fullscreen/google-fullscreen.component';
import { LeafletComponent } from './maps/leaflet/leaflet.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { ForgotComponent } from './authentication/forgot/forgot.component';
import { LockscreenComponent } from './authentication/lockscreen/lockscreen.component';
import { Error404Component } from './error/error404/error404.component';
import { Error500Component } from './error/error500/error500.component';
import { Error503Component } from './error/error503/error503.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardV1Component,
    DashboardV2Component,
    CkeditorComponent,
    WysiwygEditorComponent,
    DragulaComponent,
    SortableComponent,
    LineaComponent,
    MaterialComponent,
    SimpleLineIconsComponent,
    FontawesomeComponent,
    GoogleComponent,
    GoogleFullscreenComponent,
    LeafletComponent,
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    LockscreenComponent,
    Error404Component,
    Error500Component,
    Error503Component,
    AuthLayoutComponent,
  
  ],
  imports: [
    BrowserModule,
    approuting,
    NgbModule,
    RouterModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

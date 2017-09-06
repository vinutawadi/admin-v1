import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DashboardV1Component } from './dashboard/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './dashboard/dashboard-v2/dashboard-v2.component';
import { CarsouselComponent } from './components/carsousel/carsousel.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { TabComponent } from './components/tab/tab.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CkeditorComponent } from './editor/ckeditor/ckeditor.component';
import { FaListComponent } from './editor/fa-list/fa-list.component';
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


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    AlertComponent,
    ButtonsComponent,
    DashboardV1Component,
    DashboardV2Component,
    CarsouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    TabComponent,
    TimepickerComponent,
    TooltipComponent,
    TypeaheadComponent,
    InboxComponent,
    ChatComponent,
    CalendarComponent,
    CkeditorComponent,
    FaListComponent,
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
    Error503Component
  ],
  imports: [
    BrowserModule,
    appRouting,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    CommonModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MeetupsPageComponent } from './pages/meetups-page/meetups-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/forms/auth-form/auth-form.component';
import { MeetupComponent } from './components/meetup/meetup.component';
import { HeaderComponent } from './components/header/header.component';
import { authInterceptor } from './interceptors/auth.interceptor';
import { FilterFormComponent } from './components/forms/filter-form/filter-form.component';
import { FilterMeetupsPipe } from './pipes/filter-meetups.pipe';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MeetupFormComponent } from './components/forms/meetup-form/meetup-form.component';
import { UserMeetupsPageComponent } from './pages/user-meetups-page/user-meetups-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { UserFilterMeetupsPipe } from './pipes/user-filter-meetups.pipe';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserTableRowComponent } from './components/user-table-row/user-table-row.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { spinnerInterceptor } from './interceptors/spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MeetupsPageComponent,
    AuthFormComponent,
    MeetupComponent,
    HeaderComponent,
    FilterFormComponent,
    FilterMeetupsPipe,
    MeetupFormComponent,
    UserMeetupsPageComponent,
    ModalComponent,
    UserFilterMeetupsPipe,
    UsersPageComponent,
    UserTableRowComponent,
    UserFormComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'ru_RU' },
    { provide: HTTP_INTERCEPTORS, useClass: spinnerInterceptor, multi: true },
    provideMomentDateAdapter(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

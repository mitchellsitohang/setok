import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from './api/api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetokHttpInterceptor } from './interceptors/SetokHttpInterceptor';
import { ItemsComponent } from './components/items/items.component';
import { environment } from 'src/environments/environment';
import { FormService } from './services/form.service';
import { ItemsTauryComponent } from './components/items-taury/items-taury/items-taury.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatFormFieldModule  } from '@angular/material/form-field';
import {  MatButtonModule  } from '@angular/material/button';
import {  MatCardModule  } from '@angular/material/card';
import {  MatInputModule  } from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegistrationTableComponent } from './components/registration-table/registration-table.component';
import { MatTableModule } from '@angular/material/table';
import { SetokTableComponent } from './components/setok-table/setok-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsTauryComponent,
    UserRegistrationComponent,
    RegistrationTableComponent,
    HomeComponent,
    NavbarComponent,
    SetokTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: environment.apiBaseUrl }),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetokHttpInterceptor,
      multi: true
    },
    FormService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

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

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot({ rootUrl: environment.apiBaseUrl }),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SetokHttpInterceptor,
    multi: true
  },
  FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

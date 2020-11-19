import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfPeopleComponent } from './components/list-of-people/list-of-people.component';
import {PersonService} from './services/person.service'
import { AppInterceptorInterceptor } from './services/app-interceptor.interceptor';
import { CreatePeopleComponent } from './components/create-people/create-people.component';
import { EditPeopleComponent } from './components/edit-people/edit-people.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfPeopleComponent,
    CreatePeopleComponent,
    EditPeopleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PersonService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorInterceptor,
      multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

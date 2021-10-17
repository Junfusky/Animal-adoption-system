import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LoadingComponent,
    AnimalListComponent,
    ConfirmComponent,
    AnimalDetailComponent,
    LoginComponent,
    AddAnimalComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

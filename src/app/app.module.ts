import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ChronogramRegisterComponent } from './components/chronogram-register/chronogram-register.component';
import { ChronogramConsultComponent } from './components/chronogram-consult/chronogram-consult.component';
import { ProgramConsultComponent } from './components/program-consult/program-consult.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainMenuComponent,
    NavbarComponent,
    ChronogramRegisterComponent,
    ChronogramConsultComponent,
    ProgramConsultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

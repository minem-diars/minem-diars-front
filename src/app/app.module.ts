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
import { StatePipe } from './pipes/state.pipe';
import { PreviewActivitieComponent } from './components/preview-activitie/preview-activitie.component';
import { ProgramRegisterComponent } from './components/program-register/program-register.component';
import { ProgramEvaluateComponent } from './components/program-evaluate/program-evaluate.component';
import { AttachFileComponent } from './components/attach-file/attach-file.component';
import { RegisterTicketPurchaseComponent } from './components/register-ticket-purchase/register-ticket-purchase.component';
import { EvaluateTicketPurchaseComponent } from './components/evaluate-ticket-purchase/evaluate-ticket-purchase.component';
import { ProgramVerifyComponent } from './components/program-verify/program-verify.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { PasswordModifyComponent } from './components/password-modify/password-modify.component';
import { ProgramModifyComponent } from './components/program-modify/program-modify.component';
import { TicketPurchaseConsultComponent } from './components/ticket-purchase-consult/ticket-purchase-consult.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainMenuComponent,
    NavbarComponent,
    ChronogramRegisterComponent,
    ChronogramConsultComponent,
    ProgramConsultComponent,
    StatePipe,
    PreviewActivitieComponent,
    ProgramRegisterComponent,
    ProgramEvaluateComponent,
    AttachFileComponent,
    RegisterTicketPurchaseComponent,
    EvaluateTicketPurchaseComponent,
    ProgramVerifyComponent,
    EmployeeRegisterComponent,
    PasswordModifyComponent,
    ProgramModifyComponent,
    TicketPurchaseConsultComponent,
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChronogramRegisterComponent } from './components/chronogram-register/chronogram-register.component';
import { ChronogramConsultComponent } from './components/chronogram-consult/chronogram-consult.component';
import { ProgramConsultComponent } from './components/program-consult/program-consult.component';
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
import { AttachFileConsultComponent } from './components/attach-file-consult/attach-file-consult.component';
import { AttachFileVerifyComponent } from './components/attach-file-verify/attach-file-verify.component';
import { ChangeRequestRegisterComponent } from './components/change-request-register/change-request-register.component';
import { ProgramAcceptedConsultComponent } from './components/program-accepted-consult/program-accepted-consult.component';
import { ChangeRequestConsultComponent } from './components/change-request-consult/change-request-consult.component';
import { CanActivatedIsLoggedGuard } from './guards/can-activated-is-logged.guard';

const routes: Routes = [
  {path: '',                                       redirectTo: 'login', pathMatch: 'full'},
  {path: 'home',                                   component: HomeComponent,                     canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'login',                                  component: LoginComponent},
  {path: 'chronogram/register',                    component: ChronogramRegisterComponent,       canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'chronogram/consult',                     component: ChronogramConsultComponent,        canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/consult',                        component: ProgramConsultComponent,           canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/register',                       component: ProgramRegisterComponent,          canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/register/:chronogramCode',       component: ProgramRegisterComponent,          canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/evaluate',                       component: ProgramEvaluateComponent,          canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/evaluate/:programCode',          component: ProgramEvaluateComponent,          canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'livelihood/attach',                      component: AttachFileComponent,               canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'livelihood/attach/:programCode',         component: AttachFileComponent,               canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'purchase/ticket/register',               component: RegisterTicketPurchaseComponent,   canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'purchase/ticket/register/:programCode',  component: RegisterTicketPurchaseComponent,   canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'purchase/ticket/evaluate',               component: EvaluateTicketPurchaseComponent,   canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'purchase/ticket/evaluate/:ticketCode',   component: EvaluateTicketPurchaseComponent,   canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/verify',                         component: ProgramVerifyComponent,            canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/verify/:programCode',            component: ProgramVerifyComponent,            canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'employee/register',                      component: EmployeeRegisterComponent,         canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'password-modify',                        component: PasswordModifyComponent},
  {path: 'program/modify',                         component: ProgramModifyComponent,            canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/modify/:programCode',            component: ProgramModifyComponent,            canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'purchase/ticket/consult',                component: TicketPurchaseConsultComponent,    canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'livelihood/consult',                     component: AttachFileConsultComponent,        canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'livelihood/verify',                      component: AttachFileVerifyComponent,         canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'livelihood/verify/:programCode',         component: AttachFileVerifyComponent,         canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'change/register',                        component: ChangeRequestRegisterComponent,    canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'change/register/:programCode',           component: ChangeRequestRegisterComponent,    canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'program/acceptd/consult',                component: ProgramAcceptedConsultComponent,   canActivate: [CanActivatedIsLoggedGuard]},
  {path: 'change/consult',                         component: ChangeRequestConsultComponent,     canActivate: [CanActivatedIsLoggedGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

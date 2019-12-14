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

const routes: Routes = [
  {path: '',                                            component: LoginComponent},
  {path: 'home',                                        component: HomeComponent},
  {path: 'login',                                       component: LoginComponent},
  {path: 'chronogram/register',                    component: ChronogramRegisterComponent},
  {path: 'chronogram/consult',                     component: ChronogramConsultComponent},
  {path: 'program/consult',                        component: ProgramConsultComponent},
  {path: 'program/register',                       component: ProgramRegisterComponent},
  {path: 'program/register/:chronogramCode',       component: ProgramRegisterComponent},
  {path: 'program/evaluate',                       component: ProgramEvaluateComponent},
  {path: 'program/evaluate/:programCode',          component: ProgramEvaluateComponent},
  {path: 'livelihood/attach',                      component: AttachFileComponent},
  {path: 'livelihood/attach/:programCode',         component: AttachFileComponent},
  {path: 'purchase/ticket/register',               component: RegisterTicketPurchaseComponent},
  {path: 'purchase/ticket/register/:programCode',  component: RegisterTicketPurchaseComponent},
  {path: 'purchase/ticket/evaluate',               component: EvaluateTicketPurchaseComponent},
  {path: 'purchase/ticket/evaluate/:ticketCode',   component: EvaluateTicketPurchaseComponent},
  {path: 'program/verify',                         component: ProgramVerifyComponent},
  {path: 'program/verify/:programCode',            component: ProgramVerifyComponent},
  {path: 'employee/register',                      component: EmployeeRegisterComponent},
  {path: 'login/password-modify',                  component: PasswordModifyComponent},
  {path: 'program/modify',                         component: ProgramModifyComponent},
  {path: 'program/modify/:programCode',            component: ProgramModifyComponent},
  {path: 'purchase/ticket/consult',                component: TicketPurchaseConsultComponent},
  {path: 'livelihood/consult',                     component: AttachFileConsultComponent},
  {path: 'livelihood/verify',                      component: AttachFileVerifyComponent},
  {path: 'livelihood/verify/:programCode',         component: AttachFileVerifyComponent},
  {path: 'change/register',                        component: ChangeRequestRegisterComponent},
  {path: 'change/register/:programCode',           component: ChangeRequestRegisterComponent},
  {path: 'program/acceptd/consult',                component: ProgramAcceptedConsultComponent},
  {path: 'change/consult',                         component: ChangeRequestConsultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
  {path: 'home/chronogram/register',                    component: ChronogramRegisterComponent},
  {path: 'home/chronogram/consult',                     component: ChronogramConsultComponent},
  {path: 'home/program/consult',                        component: ProgramConsultComponent},
  {path: 'home/program/register',                       component: ProgramRegisterComponent},
  {path: 'home/program/register/:chronogramCode',       component: ProgramRegisterComponent},
  {path: 'home/program/evaluate',                       component: ProgramEvaluateComponent},
  {path: 'home/program/evaluate/:programCode',          component: ProgramEvaluateComponent},
  {path: 'home/livelihood/attach',                      component: AttachFileComponent},
  {path: 'home/livelihood/attach/:programCode',         component: AttachFileComponent},
  {path: 'home/purchase/ticket/register',               component: RegisterTicketPurchaseComponent},
  {path: 'home/purchase/ticket/register/:programCode',  component: RegisterTicketPurchaseComponent},
  {path: 'home/purchase/ticket/evaluate',               component: EvaluateTicketPurchaseComponent},
  {path: 'home/purchase/ticket/evaluate/:ticketCode',   component: EvaluateTicketPurchaseComponent},
  {path: 'home/program/verify',                         component: ProgramVerifyComponent},
  {path: 'home/program/verify/:programCode',            component: ProgramVerifyComponent},
  {path: 'home/employee/register',                      component: EmployeeRegisterComponent},
  {path: 'home/login/password-modify',                  component: PasswordModifyComponent},
  {path: 'home/program/modify',                         component: ProgramModifyComponent},
  {path: 'home/program/modify/:programCode',            component: ProgramModifyComponent},
  {path: 'home/purchase/ticket/consult',                component: TicketPurchaseConsultComponent},
  {path: 'home/livelihood/consult',                     component: AttachFileConsultComponent},
  {path: 'home/livelihood/verify',                      component: AttachFileVerifyComponent},
  {path: 'home/livelihood/verify/:programCode',         component: AttachFileVerifyComponent},
  {path: 'home/change/register',                        component: ChangeRequestRegisterComponent},
  {path: 'home/change/register/:programCode',           component: ChangeRequestRegisterComponent},
  {path: 'home/program/acceptd/consult',                component: ProgramAcceptedConsultComponent},
  {path: 'home/change/consult',                         component: ChangeRequestConsultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

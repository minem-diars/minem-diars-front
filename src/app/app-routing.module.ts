import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChronogramRegisterComponent } from './components/chronogram-register/chronogram-register.component';
import { ChronogramConsultComponent } from './components/chronogram-consult/chronogram-consult.component';
import { ProgramConsultComponent } from './components/program-consult/program-consult.component';
import { ProgramRegisterComponent } from './components/program-register/program-register.component';
import { ProgramEvaluateComponent } from './components/program-evaluate/program-evaluate.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/chronogram/register', component: ChronogramRegisterComponent},
  {path: 'home/chronogram/consult', component: ChronogramConsultComponent},
  {path: 'home/program/consult', component: ProgramConsultComponent},
  {path: 'home/program/register', component: ProgramRegisterComponent},
  {path: 'home/program/register/:chronogramCode', component: ProgramRegisterComponent},
  {path: 'home/program/evaluate', component: ProgramEvaluateComponent},
  {path: 'home/program/evaluate/:programCode', component: ProgramEvaluateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProgramService } from '../../services/program.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-accepted-consult',
  templateUrl: './program-accepted-consult.component.html',
  styleUrls: ['./program-accepted-consult.component.css']
})
export class ProgramAcceptedConsultComponent implements OnInit {

  fRole: string;

  codeOfUser: FormGroup;

  programs: any = [];
  employeeName = 'nombre de empleado';

  constructor(private programService: ProgramService,
              private router: Router) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    if (this.validateSession(this.fRole)) {
      this.codeOfUser = new FormGroup({
        userCode: new FormControl('')
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  validateSession(role: string): boolean {
    if (role === null) {
      return false;
    } else {
      return true;
    }
  }

  findDataByCode() {
    const employeeCode = parseInt(this.codeOfUser.value.userCode, 10);
    const empCode = parseInt(localStorage.getItem('empCode'), 10);
    if (!isNaN(employeeCode)) {
      this.programService.consultAcceptedPrograms(empCode, employeeCode).subscribe( data => {
        this.programs = data.programs;
        this.employeeName = data.employeeFullName;
      });
    }
  }

}

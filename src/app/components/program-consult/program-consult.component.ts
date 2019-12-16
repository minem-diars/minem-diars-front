import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-consult',
  templateUrl: './program-consult.component.html',
  styleUrls: ['./program-consult.component.css']
})
export class ProgramConsultComponent implements OnInit {

  fRole: string;

  codeOfUser: FormGroup;

  programs: any = [];
  employeeName = 'nombre de empleado';

  varCPV: number;

  constructor(private programService: ProgramService,
              private router: Router) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    if (this.validateSession(this.fRole)) {
      this.varCPV = parseInt(localStorage.getItem('tempCPV'), 10);
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
    if (!isNaN(employeeCode)) {
      this.programService.consultPrograms(employeeCode, this.fRole, this.varCPV).subscribe( data => {
        this.programs = data.programs;
        if (data.employeeName !== '') {
          this.employeeName = data.employeeName;
        } else {
          this.employeeName = data.employeeFullName;
        }
      });
    }
  }

}

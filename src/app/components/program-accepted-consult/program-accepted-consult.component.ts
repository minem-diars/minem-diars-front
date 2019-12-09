import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProgramService } from '../../services/program.service';

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

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.codeOfUser = new FormGroup({
      userCode: new FormControl('')
    });
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

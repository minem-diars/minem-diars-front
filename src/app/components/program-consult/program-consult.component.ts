import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.codeOfUser = new FormGroup({
      userCode: new FormControl('')
    });
  }

  findDataByCode() {
    const employeeCode = parseInt(this.codeOfUser.value.userCode, 10);
    if (!isNaN(employeeCode)) {
      this.programService.consultPrograms(employeeCode, this.fRole).subscribe( data => {
        this.programs = data.programs;
        this.employeeName = data.employeeName;
      });
    }
  }

}

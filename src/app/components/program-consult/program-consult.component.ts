import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../services/program.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-program-consult',
  templateUrl: './program-consult.component.html',
  styleUrls: ['./program-consult.component.css']
})
export class ProgramConsultComponent implements OnInit {

  codeOfUser: FormGroup;

  programs: any = [];
  employeeName = 'nombre de empleado';

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.codeOfUser = new FormGroup({
      userCode: new FormControl('')
    });
  }

  findDataByCode() {
    console.log(this.codeOfUser.value);
    const employeeCode = this.codeOfUser.value.userCode;
    this.programService.consultProgram(employeeCode).subscribe( data => {
      console.log(data);
      this.programs = data.programs;
      this.employeeName = data.employeeName;
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChangeRequestService } from '../../services/change-request.service';

@Component({
  selector: 'app-change-request-consult',
  templateUrl: './change-request-consult.component.html',
  styleUrls: ['./change-request-consult.component.css']
})
export class ChangeRequestConsultComponent implements OnInit {

  fRole: string;

  codeOfUser: FormGroup;

  programs: any = [];
  employeeName = 'nombre de empleado';

  constructor(private changeRequestService: ChangeRequestService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.codeOfUser = new FormGroup({
      userCode: new FormControl('')
    });
  }

  findDataByCode() {
    const employeeCode = parseInt(this.codeOfUser.value.userCode, 10);
    if (!isNaN(employeeCode)) {
      this.changeRequestService.consultChangeRequest(employeeCode).subscribe( data => {
        this.programs = data.programs;
        this.employeeName = data.employeeFullName;
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChangeRequestService } from '../../services/change-request.service';
import { Router } from '@angular/router';

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

  constructor(private changeRequestService: ChangeRequestService,
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
    if (!isNaN(employeeCode)) {
      this.changeRequestService.consultChangeRequest(employeeCode).subscribe( data => {
        this.programs = data.programs;
        this.employeeName = data.employeeFullName;
      });
    }
  }

}

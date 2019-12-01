import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {

  fRole = '';
  employeeName = '';
  employeeLastname = '';
  employeeDni = '';
  employeeAddress = '';
  employeeEmail = '';
  employeePhone = '';
  credentialUser = '';
  credentialPassword = '';

  constructor(private EmployeeService: EmployeeService, ) { }

  ngOnInit() {
  }

}

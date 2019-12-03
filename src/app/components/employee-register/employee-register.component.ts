import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CommonService } from '../../services/common.service';

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
  roles: any;
  employeeEmail = '';
  employeePhone = '';
  credentialUser = '';
  credentialPassword = '';
  request: any = {
    employee: {
      address: '',
      dni: '',
      email: '',
      lastname: '',
      name: '',
      phone: '',
      fullname: ''
    },
    credential: {
      username: '',
      password: ''
    },
    role: {
      idRole: ''
    }
  };
  employeeRegister: FormGroup;
  backResponse: any = {};
  error = '';

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private commonService: CommonService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.obtainRoles();
    this.employeeRegister = this.formBuilder.group({
      address: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      idRole: new FormControl('', Validators.required)
    });
  }

  obtainRoles() {
    this.commonService.findRoles().subscribe(data => {
      this.roles = data.roles;
    });
  }

  registerEmployee() {
  }

}

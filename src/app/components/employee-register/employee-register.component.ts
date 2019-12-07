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
  roles: any;
  equalsPass = false;
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
      passConfirm: new FormControl('', Validators.required),
      idRole: new FormControl('', Validators.required)
    });
  }

  obtainRoles() {
    this.commonService.findRoles().subscribe(data => {
      this.roles = data.roles;
    });
  }

  onSubmit() {
    this.validatePassword(this.employeeRegister.get('password').value, this.employeeRegister.get('passConfirm').value);
    if (this.equalsPass) {
      this.request.employee.address = this.employeeRegister.get('address').value;
      this.request.employee.dni = this.employeeRegister.get('dni').value;
      this.request.employee.email = this.employeeRegister.get('email').value;
      this.request.employee.lastname = this.employeeRegister.get('lastname').value;
      this.request.employee.name = this.employeeRegister.get('name').value;
      this.request.employee.phone = this.employeeRegister.get('phone').value;
      this.request.credential.username = this.employeeRegister.get('username').value;
      this.request.credential.password = this.employeeRegister.get('password').value;
      this.request.role.idRole = this.employeeRegister.get('idRole').value;
      console.log(this.request);
      this.registerEmployee(this.request);
    }
  }

  registerEmployee(request: any) {
    this.employeeService.registerEmployee(request).subscribe(data => {
      this.validateServiceResponse(data);
    });
  }

  validateServiceResponse(data: any) {
    if (parseInt(data.status, 10) === 0) {
      this.backResponse.message = data.message;
      document.getElementById('modalRegisterButton').click();
    } else {
      this.error = data.errorMessage;
      document.getElementById('modalToErrorButton').click();
    }
  }

  validatePassword(pass1: string, pass2: string) {
    if ((pass1 === pass2)) {
      this.equalsPass = true;
    } else {
      this.error = 'Las contraseñas deben de ser iguales.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  validateWithModal() {
    this.employeeRegister.reset();
  }

}

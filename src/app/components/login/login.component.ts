import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  response: any;

  backResponse: any = {};
  error = '';

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.cleanTemporalInformation();
    this.login = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.loginService.login(this.login.value).subscribe(data => {
      this.viewMainMenu(data);
    });
  }

  viewMainMenu(data: any) {
    if (parseInt(data.status, 10) === 0) {
      this.saveTemporalInformation(data);
      this.backResponse.description = data.description;
      document.getElementById('modalLoginButton').click();
    } else {
      this.error = data.errorMessage;
      document.getElementById('modalToErrorButton').click();
    }
  }

  saveTemporalInformation(data: any) {
    localStorage.setItem('empCode', data.employeeCode);
    localStorage.setItem('empName', data.employeeFullName);
    localStorage.setItem('empRole', data.userRol);
    localStorage.setItem('empMessage', data.description);
  }

  cleanTemporalInformation() {
    localStorage.clear();
  }

}

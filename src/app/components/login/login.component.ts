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
  userInvalid = false;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.cleanTemporalInformation();
    this.login = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('')
    });
  }

  onSubmit() {
    this.loginService.login(this.login.value).subscribe(data => {
      this.viewMainMenu(data);
    });
  }

  viewMainMenu(data: any) {
    if (data.status === '0') {
      this.saveTemporalInformation(data);
      this.router.navigate(['/home']);
    } else {
      this.userInvalid = true;
    }
  }

  saveTemporalInformation(data: any) {
    localStorage.setItem('empCode', data.employeeCode);
    localStorage.setItem('empName', data.employeeFullName);
    localStorage.setItem('empRole', data.userRol);
    localStorage.setItem('empMessage', data.description);
  }

  cleanTemporalInformation() {
    localStorage.removeItem('empCode');
    localStorage.removeItem('empName');
    localStorage.removeItem('empRole');
  }

}

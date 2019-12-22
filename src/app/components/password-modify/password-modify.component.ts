import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-password-modify',
  templateUrl: './password-modify.component.html',
  styleUrls: ['./password-modify.component.css']
})
export class PasswordModifyComponent implements OnInit {

  validateForm: FormGroup;
  passwordForm: FormGroup;
  request: any = {
    email: '',
    username: ''
  };
  requestPass: any = {
    employeeCode: 0,
    password: ''
  };
  equalsPass = false;
  isContinue = false;
  error = '';
  backResponse: any = {};

  constructor( private loginService: LoginService) { }

  ngOnInit() {
    this.validateForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      user: new FormControl('', Validators.required)
    });
    this.passwordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.request.email = this.validateForm.get('email').value;
    this.request.username = this.validateForm.get('user').value;
    this.sendInformation(this.request);
  }

  onSubmitPassword() {
    this.validatePassword(this.passwordForm.get('password').value, this.passwordForm.get('passwordConfirm').value);
    if (this.equalsPass) {
      this.loginService.savePassword(this.requestPass).subscribe( data => {
        if (parseInt(data.status, 10) === 0) {
          this.backResponse.message = data.message;
          document.getElementById('modalUpdatePasswordButton').click();
        } else {
          this.error = data.errorMessage;
          document.getElementById('modalToErrorButton').click();
        }
      });
    }
  }

  sendInformation(request: any) {
    this.loginService.validateEmail(request).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.requestPass.employeeCode = data.employeeCode;
        this.isContinue = true;
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalToErrorButton').click();
      }
    });
  }

  validatePassword(pass1: string, pass2: string) {
    if ((pass1 === pass2)) {
      this.requestPass.password = this.passwordForm.get('password').value;
      this.equalsPass = true;
    } else {
      this.error = 'Las contraseñas deben de ser iguales.';
      document.getElementById('modalToErrorButton').click();
    }
  }
}

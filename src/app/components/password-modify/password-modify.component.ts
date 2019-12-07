import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ChronogramService } from '../../services/chronogram.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-password-modify',
  templateUrl: './password-modify.component.html',
  styleUrls: ['./password-modify.component.css']
})
export class PasswordModifyComponent implements OnInit {

  fRole: string;

  passwordModify: FormGroup;
  passwordForm: FormGroup;
  request: any = {
    email: '',
    user: ''
  };
  requestPass: any = {
    password: ''
  };
  equalsPass = false;
  isContinue = false;
  error = '';
  backResponse: any = {};

  constructor( private loginService: LoginService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.passwordModify = new FormGroup({
      email: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required)
    });
    this.passwordForm = new FormGroup({
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.request.email = this.passwordModify.get('email').value;
    this.request.user = this.passwordModify.get('user').value;
    this.sendInformation(this.request);
  }

  onSubmitPassword() {
    this.validatePassword(this.passwordForm.get('password').value, this.passwordForm.get('passwordConfirm').value);
    if (this.equalsPass) {
      this.loginService.savePassword(this.requestPass).subscribe( data => {
        if (parseInt(data.status, 10) === 0) {
          this.backResponse.message = data.message;
          document.getElementById('modalRegisterButton').click();
        } else {
          this.error = data.errorMessage;
          document.getElementById('modalRoErrorButton').click();
        }
      });
    }
  }

  sendInformation(request: any) {
    this.loginService.validateEmail(request).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.isContinue = true;
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalRoErrorButton').click();
      }
    });
  }

  validatePassword(pass1: string, pass2: string) {
    if ((pass1 === pass2)) {
      this.equalsPass = true;
    } else {
      this.error = 'Las contraseñas deben de ser iguales.';
      document.getElementById('modalToErrorButton').click();
    }
  }
}

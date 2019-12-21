import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

import { AuthLoginInfo } from 'src/app/classes/login-info';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  role: string;

  login: FormGroup;
  response: any;

  backResponse: any = {};
  error = '';

  private loginInfo: AuthLoginInfo;

  constructor(private loginService: LoginService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.cleanTemporalInformation();
    this.login = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(this.login.value.username, this.login.value.password);
    this.loginService.login(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.employeeFullName);
        this.tokenStorage.saveUsercode(data.employeeCode);
        this.tokenStorage.saveRole(data.userRol);

        this.backResponse.description = 'Logueado correctamente.';
        document.getElementById('modalLoginButton').click();
      },
      error => {
        console.log(error);
        this.error = error.error.message;
        document.getElementById('modalToErrorButton').click();
      }
    );
  }

  cleanTemporalInformation() {
    this.tokenStorage.signOut();
  }

}

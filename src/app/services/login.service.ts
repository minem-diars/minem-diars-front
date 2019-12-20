import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthLoginInfo } from '../classes/login-info';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = environment.url_server + 'travel/login/v1/';
  private authUrl = environment.url_server +  'api/auth/';

  constructor(private http: HttpClient) { }

  public login(data: AuthLoginInfo): Observable<any> {
    const envUrl = this.authUrl + 'access';
    return this.http.post(envUrl, data, httpOptions);
  }

  /* Validar email para modificar contraseña */
  public validateEmail(data: any): Observable<any> {
    const envUrl = this.loginUrl + 'validateInfo';
    return this.http.post(envUrl, data);
  }

  /* Guardar nueva contraseña */
  public savePassword(data: any): Observable<any> {
    const envUrl = this.loginUrl + 'updatePassword';
    return this.http.post(envUrl, data);
  }
}

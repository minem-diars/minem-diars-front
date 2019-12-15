import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = environment.url_server + 'travel/login/v1/';

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    const envUrl = this.loginUrl + 'access';
    return this.http.post(envUrl, data);
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

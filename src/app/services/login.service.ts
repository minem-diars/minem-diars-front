import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://192.168.1.4:8080/travel/login/v1/access';

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    return this.http.post(this.loginUrl, data);
  }
}

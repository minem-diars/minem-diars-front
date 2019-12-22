import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private envUrl = environment.url_server + 'api/auth/';

  constructor(private http: HttpClient) { }

  /* Registrar empleado */
  public registerEmployee(request: any): Observable<any> {
    const registertUrl = this.envUrl + 'register';
    return this.http.post(registertUrl, request);
  }
}

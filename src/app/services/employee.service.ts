import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private envUrl = 'http://192.168.1.7:8080/travel/employee/v1/';

  constructor(private http: HttpClient) { }

  /* Registrar empleado */
  public registerEmployee(request: any): Observable<any> {
    const registertUrl = this.envUrl + 'register';
    return this.http.post(registertUrl, request);
  }
}

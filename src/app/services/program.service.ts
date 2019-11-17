import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private envUrl = 'http://localhost:8080/travel/program/v1/';

  constructor(private http: HttpClient) { }

  /* Coonsultar programacion */
  public consultProgram(employeeCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/';
    return this.http.get(consultUrl + employeeCode);
  }

}

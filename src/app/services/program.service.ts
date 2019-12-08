import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private envUrl = 'http://localhost:8080/travel/program/v1/';

  constructor(private http: HttpClient) { }

  /* Coonsultar programaciones */
  public consultPrograms(employeeCode: number, userRole: string, flag: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/';
    return this.http.get(consultUrl + employeeCode + '/' + userRole + '/' + flag);
  }

  /* Coonsultar programacion */
  public consultProgram(programCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/evaluate/';
    return this.http.get(consultUrl + programCode);
  }

  /* Registrar programacion */
  public registerProgram(request: any): Observable<any> {
    const registertUrl = this.envUrl + 'register';
    return this.http.post(registertUrl, request);
  }

  /* Actualizar estado de programacion */
  /* Verificar programacion de viaje */
  public updateProgramState(request: any): Observable<any> {
    const registertUrl = this.envUrl + 'update/state';
    return this.http.post(registertUrl, request);
  }

  /* verificar programacion */
  public verifyProgram(programCode: any): Observable<any> {
    const registertUrl = this.envUrl + 'verify/';
    return this.http.get(registertUrl + programCode);
  }

  public testD(id: any): Observable<any> {
    const registertUrl = 'http://192.168.1.7:8080/travel/file/v1/download/';
    return this.http.get(registertUrl + id);
  }

}

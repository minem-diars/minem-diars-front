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
  public consultPrograms(employeeCode: number, userRole: string): Observable<any> {
    const consultUrl = this.envUrl + 'consult/';
    return this.http.get(consultUrl + employeeCode + '/' + userRole);
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

  public test(idProgram: number, fileName: string, file: File): Observable<any> {
    const registertUrl = 'http://localhost:8080/travel/file/v1/upload';
    const fileRequest: FormData = new FormData();
    const prepareToReq = `${file.name}+${fileName}+${idProgram}`;
    fileRequest.append('file', file, prepareToReq);
    return this.http.post(registertUrl, fileRequest);
  }

  public testD(id: any): Observable<any> {
    const registertUrl = 'http://localhost:8080/travel/file/v1/download/';
    return this.http.get(registertUrl + id);
  }

}

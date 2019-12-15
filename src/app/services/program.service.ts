import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private envUrl = environment.url_server + 'travel/program/v1/';
  private fileUrl = environment.url_server + 'travel/file/v1/';

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

  /* Coonsultar programaciones para doc sustento */
  public consultProgramsForFiles(programCode: number): Observable<any> {
    const consultUrl = this.fileUrl + 'consult/';
    return this.http.get(consultUrl + programCode);
  }

  /* Descargar archivo */
  public downloadFile(programCode: number, fileName: string) {
    const downloadtUrl = this.fileUrl + 'download/';
    const URL = downloadtUrl + programCode + '/' + fileName;
    window.open(URL);
  }

  /* Consultar programaciones aceptadas */
  public consultAcceptedPrograms(dlogCode: number, empCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/accepted/';
    return this.http.get(consultUrl + '/' + dlogCode + '/' + empCode);
  }

  /* Consultar para Modificar programaciones */
  public consultForUpdateProgram(programCode: number, flag: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/update/';
    return this.http.get(consultUrl + programCode + '/' + flag);
  }

  /* Actualizar programacion */
  public postUpdateProgram(request: any): Observable<any> {
    const consultUrl = this.envUrl + 'update/program';
    return this.http.post(consultUrl, request);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChronogramService {

  private envUrl = 'http://192.168.1.4:8080/travel/chronogram/v1/';

  constructor(private http: HttpClient) { }

  /* Consultar cronogramas */
  public consultChronograms(employeeCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/';
    return this.http.get(consultUrl + employeeCode);
  }

  /* Consultar cronograma */
  public consultChronogram(chronogramCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/findone/';
    return this.http.get(consultUrl + chronogramCode);
  }

  /* Registrar cronograma */
  public registerChronogram(request: any): Observable<any> {
    const registertUrl = this.envUrl + 'register';
    return this.http.post(registertUrl, request);
  }

}

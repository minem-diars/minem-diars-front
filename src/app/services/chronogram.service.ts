import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChronogramService {

  private envUrl = environment.url_server + 'travel/chronogram/v1/';

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

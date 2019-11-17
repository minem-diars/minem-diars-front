import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChronogramService {

  private envUrl = 'http://localhost:8080/travel/chronogram/v1/';

  constructor(private http: HttpClient) { }

  /* Consultar cronograma */
  public consultChronogram(employeeCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/';
    return this.http.get(consultUrl + employeeCode);
  }

}

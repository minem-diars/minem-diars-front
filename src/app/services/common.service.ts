import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private envUrl = 'http://192.168.1.7:8080/travel/common/v1/';

  constructor(private http: HttpClient) { }

  /* Obtener mineras */
  public findMinings(): Observable<any> {
    const consultUrl = this.envUrl + 'consult/minings';
    return this.http.get(consultUrl);
  }

  /* Obtener aerolineas */
  public findAirlines(): Observable<any> {
    const consultUrl = this.envUrl + 'consult/airlines';
    return this.http.get(consultUrl);
  }

  /* Obtener roles */
  public findRoles(): Observable<any> {
    const consultUrl = this.envUrl + 'consult/roles';
    return this.http.get(consultUrl);
  }

}

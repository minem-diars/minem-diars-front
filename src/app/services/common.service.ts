import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private envUrl = 'http://localhost:8080/travel/common/v1/';

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

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private envUrl = environment.url_server + 'travel/common/v1/';

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

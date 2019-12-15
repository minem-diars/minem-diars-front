import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangeRequestService {

  private envUrl = environment.url_server + 'travel/change/request/v1/';

  constructor(private http: HttpClient) { }

  /* Registrar solicitud */
  public registerChangeRequest(request: any): Observable<any> {
    const registerUrl = this.envUrl + 'register';
    return this.http.post(registerUrl, request);
  }

  /* Consultar solicitudes */
  public consultChangeRequest(empCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/';
    return this.http.get(consultUrl + empCode);
  }

}

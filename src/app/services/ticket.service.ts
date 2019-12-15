import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private envUrl = environment.url_server + 'travel/ticket/purchase/v1/';

  constructor(private http: HttpClient) { }

  /* Registrar pedido de compra de pasaje */
  public registerTicket(request: any): Observable<any> {
    const registertUrl = this.envUrl + 'register';
    return this.http.post(registertUrl, request);
  }

  /* Actualizar estado de pedido de compra de pasaje */
  public updateTicket(request: any): Observable<any> {
    const registertUrl = this.envUrl + 'update/state';
    return this.http.post(registertUrl, request);
  }

  /* Consultar tickets */
  public consultTickets(employeeCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'consult/';
    return this.http.get(consultUrl + employeeCode);
  }

  /* Consultar ticket */
  public consultTicket(ticketCode: number): Observable<any> {
    const consultUrl = this.envUrl + 'evaluate/';
    return this.http.get(consultUrl + ticketCode);
  }

}

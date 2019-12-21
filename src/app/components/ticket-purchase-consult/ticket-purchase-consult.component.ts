import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-ticket-purchase-consult',
  templateUrl: './ticket-purchase-consult.component.html',
  styleUrls: ['./ticket-purchase-consult.component.css']
})
export class TicketPurchaseConsultComponent implements OnInit {

  fRole: string;

  codeOfUser: FormGroup;

  tickets: any = [];
  employeeName = 'nombre de empleado';

  constructor(private ticketService: TicketService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fRole = this.tokenStorage.getRole();
    this.codeOfUser = new FormGroup({
      userCode: new FormControl('')
    });
  }

  findDataByCode() {
    console.log(this.codeOfUser.value);
    const employeeCode = this.codeOfUser.value.userCode;
    this.ticketService.consultTickets(employeeCode).subscribe( data => {
      console.log(data);
      this.tickets = data.tickets;
      this.employeeName = data.employeeName;
    });

  }

}

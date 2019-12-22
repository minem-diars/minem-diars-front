import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-evaluate-ticket-purchase',
  templateUrl: './evaluate-ticket-purchase.component.html',
  styleUrls: ['./evaluate-ticket-purchase.component.css']
})
export class EvaluateTicketPurchaseComponent implements OnInit {

  fRole: string;

  purchaseTicketEvaluate: FormGroup;

  ticketCodeRoute = 0;
  miningEnt = '';
  empFullName = '';
  airline = '';

  isEnable = true;

  request: any = {
    ticketCode: 0,
    newState: 0
  };

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private ticketService: TicketService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fRole = this.tokenStorage.getRole();
    this.ticketCodeRoute = parseInt(this.route.snapshot.paramMap.get('ticketCode'), 10);
    this.validateNanValue(this.ticketCodeRoute);
    this.findTicket(this.ticketCodeRoute);
    this.purchaseTicketEvaluate = new FormGroup({
      });
  }

  approveProgram() {
    this.request.ticketCode = this.ticketCodeRoute;
    this.request.newState = 1;
    this.updateTicketState(this.request);
  }

  disapproveProgram() {
    this.request.ticketCode = this.ticketCodeRoute;
    this.request.newState = 0;
    this.updateTicketState(this.request);
  }

  onSubmit() {
  }

  validateNanValue(ticketCodeRoute: number) {
    if (isNaN(ticketCodeRoute)) {
      this.ticketCodeRoute = 0;
    }
  }

  findTicket(ticketCode: number) {
    if (ticketCode !== 0) {
      this.ticketService.consultTicket(ticketCode).subscribe( data => {
        this.miningEnt = data.miningName;
        this.empFullName = data.employeeName;
        this.airline = data.airlineName;
        this.isEnable = false;
      });
    }
  }

  updateTicketState(request: any) {
    this.ticketService.updateTicket(request).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.backResponse.message = data.message;
        document.getElementById('modalUpdateButton').click();
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalToErrorButton').click();
      }
    });
  }

}

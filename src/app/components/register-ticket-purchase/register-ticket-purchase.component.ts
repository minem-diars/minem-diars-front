import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ProgramService } from 'src/app/services/program.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-register-ticket-purchase',
  templateUrl: './register-ticket-purchase.component.html',
  styleUrls: ['./register-ticket-purchase.component.css']
})
export class RegisterTicketPurchaseComponent implements OnInit {

  fRole: string;

  purchaseTicketRegister: FormGroup;

  miningEnt = '';
  empFullName = '';

  airlines: any;

  programCodeRoute = 0;

  request: any = {
    idProgram: 0,
    goingDate: '',
    comebackDate: '',
    airline: 0
  };

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService,
              private commonService: CommonService,
              private ticketService: TicketService,
              private router: Router) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    if (this.validateSession(this.fRole)) {
      localStorage.setItem('tempCPV', '2');
      this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
      this.validateNanValue(this.programCodeRoute);
      this.obtainAirlines();
      this.findProgramForTicketPurchase(this.programCodeRoute);
      this.purchaseTicketRegister = new FormGroup({
        exit: new FormControl('', Validators.required),
        arrival: new FormControl('', Validators.required),
        airline: new FormControl('', Validators.required)
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  validateSession(role: string): boolean {
    if (role === null) {
      return false;
    } else {
      return true;
    }
  }

  obtainAirlines() {
    this.commonService.findAirlines().subscribe( data => {
      this.airlines = data.airlines;
    });
  }

  onSubmit() {
    this.request.idProgram = this.programCodeRoute;
    if (this.request.idProgram !== 0) {
      this.request.goingDate = this.purchaseTicketRegister.get('exit').value;
      this.request.comebackDate = this.purchaseTicketRegister.get('arrival').value;
      this.request.airline = parseInt(this.purchaseTicketRegister.get('airline').value, 10);
      this.registerTicketOnServer(this.request);
    } else {
      this.error = 'Debe seleccionar una programación.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  registerTicketOnServer(request: any) {
    this.ticketService.registerTicket(request).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.backResponse.description = data.message;
        document.getElementById('modalTicketPurchaseButton').click();
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalToErrorButton').click();
      }
    });
  }

  findProgramForTicketPurchase(programCodeRoute: number) {
    if (programCodeRoute !== 0) {
      this.programService. consultProgram(programCodeRoute).subscribe( data => {
      this.empFullName = data.employeeName;
      this.miningEnt = data.miningName;
      });
    }
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  validateWithModal() {
    this.purchaseTicketRegister.reset();
    this.programCodeRoute = 0;
    this.miningEnt = '';
    this.empFullName = '';
  }

}

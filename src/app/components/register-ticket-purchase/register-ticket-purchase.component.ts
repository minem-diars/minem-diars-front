import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

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

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.obtainAirlines();
    this.purchaseTicketRegister = new FormGroup({
      exit: new FormControl(Validators.required),
      arrival: new FormControl(Validators.required),
      airline: new FormControl(Validators.required)
    })
  }

  obtainAirlines() {
    this.commonService.findAirlines().subscribe( data => {
      this.airlines = data.airlines;
    });
  }

  onSubmit(){}

}

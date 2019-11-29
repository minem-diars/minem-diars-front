import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-evaluate-ticket-purchase',
  templateUrl: './evaluate-ticket-purchase.component.html',
  styleUrls: ['./evaluate-ticket-purchase.component.css']
})
export class EvaluateTicketPurchaseComponent implements OnInit {

  fRole: string;

  purchaseTicketEvaluate: FormGroup;

  programCodeRoute = 0;
  miningEnt = '';
  empFullName = '';
  airline = '';
  days = '';

  constructor() { }

  ngOnInit() {
    this.purchaseTicketEvaluate = new FormGroup({
    });
  }

  onSubmit(){
  }

}

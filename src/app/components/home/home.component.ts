import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fRole: string;
  message: string;

  constructor() { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.message = localStorage.getItem('empMessage');
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  fRole: string;

  constructor() { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
  }

}

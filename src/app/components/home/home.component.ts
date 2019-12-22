import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fRole: string;
  employee: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.fRole = this.tokenStorage.getRole();
    this.employee = this.tokenStorage.getUsername();
  }

}

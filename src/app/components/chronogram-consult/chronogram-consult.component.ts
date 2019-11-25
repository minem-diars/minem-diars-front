import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChronogramService } from 'src/app/services/chronogram.service';

@Component({
  selector: 'app-chronogram-consult',
  templateUrl: './chronogram-consult.component.html',
  styleUrls: ['./chronogram-consult.component.css']
})
export class ChronogramConsultComponent implements OnInit {

  fRole: string;

  codeOfUser: FormGroup;

  chronograms: any = [];
  employeeName = 'nombre de empleado';

  constructor(private chronogramService: ChronogramService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.codeOfUser = new FormGroup({
      userCode: new FormControl('')
    });
  }

  findDataByCode() {
    console.log(this.codeOfUser.value);
    const employeeCode = this.codeOfUser.value.userCode;
    this.chronogramService.consultChronograms(employeeCode).subscribe( data => {
      console.log(data);
      this.chronograms = data.chronograms;
      this.employeeName = data.employeeName;
    });

  }

}

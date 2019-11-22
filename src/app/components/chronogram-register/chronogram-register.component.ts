import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ChronogramService } from '../../services/chronogram.service';

@Component({
  selector: 'app-chronogram-register',
  templateUrl: './chronogram-register.component.html',
  styleUrls: ['./chronogram-register.component.css']
})
export class ChronogramRegisterComponent implements OnInit {

  public sendList: any;

  numberDay = 0;
  isContinue = false;
  employeeName = '';
  minings: any;
  chronogramRegister: FormGroup;
  chronogramDatail: FormGroup;
  request: any = {
    commissioner: {
      employeeCode: ''
    },
    chronogram: {},
    chronogramDatails: []
  };

  constructor(private commonService: CommonService,
              private chronogramService: ChronogramService) { }

  ngOnInit() {
    this.obtainCodeEmployee();
    this.obtainMinings();
    this.chronogramRegister = new FormGroup({
      nameService: new FormControl(''),
      miningCode: new FormControl(''),
      initialDate: new FormControl(''),
      finalDate: new FormControl(''),
      days: new FormControl('')
    });

    this.chronogramDatail = new FormGroup({
      day: new FormControl(''),
      activities: new FormControl('')
    });
  }

  onSubmit() {
    this.request.chronogram = this.chronogramRegister.value;
    this.validateDays(parseInt(this.request.chronogram.days, 10), 0);
    this.isContinue = true;
    console.log(this.request);
  }

  onSubmitActivities() {
    this.chronogramDatail.value.day = this.numberDay;
    this.validateDays(parseInt(this.request.chronogram.days, 10), this.numberDay);
    this.request.chronogramDatails.push(this.chronogramDatail.value);
    this.sendList = this.request.chronogramDatails;
    // this.registerChronogram(this.isContinue);
  }

  obtainMinings() {
    this.commonService.findMinings().subscribe(data => {
      this.minings = data.minings;
    });
  }

  obtainCodeEmployee() {
    this.employeeName = localStorage.getItem('empName');
    this.request.commissioner.employeeCode =  localStorage.getItem('empCode');
  }

  validateDays(days: number, day: number) {
    if (days > day) {
      this.numberDay = day + 1;
    } else {
      this.isContinue = false;
    }
  }

  registerChronogram(flag: boolean) {
    if (flag === false) {
      this.chronogramService.registerChronogram(this.request).subscribe(data => {
        console.log(data);
      });
    }
  }

}

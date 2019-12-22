import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ChronogramService } from '../../services/chronogram.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-chronogram-register',
  templateUrl: './chronogram-register.component.html',
  styleUrls: ['./chronogram-register.component.css']
})
export class ChronogramRegisterComponent implements OnInit {

  fRole: string;

  public sendList = [];

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

  buttonState = 'Agregar';

  backResponse: any = {};
  error = '';

  constructor(
              private commonService: CommonService,
              private chronogramService: ChronogramService,
              private tokenService: TokenStorageService) { }

  ngOnInit() {
    this.fRole = this.tokenService.getRole();
    this.obtainCodeEmployee();
    this.obtainMinings();

    this.chronogramDatail = new FormGroup({
      day: new FormControl(''),
      activities: new FormControl('', Validators.required)
    });
    this.chronogramRegister = new FormGroup({
      nameService: new FormControl('', Validators.required),
      miningCode: new FormControl('', Validators.required),
      initialDate: new FormControl('', Validators.required),
      finalDate: new FormControl('', Validators.required),
      days: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.request.chronogram = this.chronogramRegister.value;
    const daysParse = parseInt(this.request.chronogram.days, 10);
    if (!isNaN(daysParse)) {
      this.validateDays(daysParse, 0);
      this.isContinue = true;
    } else {
      this.error = 'Debe ingresar un número de dias.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  onSubmitActivities() {
    this.chronogramDatail.value.day = this.numberDay;
    this.validateDays(parseInt(this.request.chronogram.days, 10), this.numberDay);
    this.request.chronogramDatails.push(this.chronogramDatail.value);
    this.sendList = this.request.chronogramDatails;
    this.chronogramDatail.reset();
    this.registerChronogram(this.isContinue);
  }

  obtainMinings() {
    this.commonService.findMinings().subscribe(data => {
      this.minings = data.minings;
    });
  }

  obtainCodeEmployee() {
    this.employeeName = this.tokenService.getUsername();
    this.request.commissioner.employeeCode =  this.tokenService.getUsercode();
  }

  validateDays(days: number, day: number) {
    if (days > day) {
      if  (day === days - 1) {
        this.buttonState = 'Registrar';
      }
      this.numberDay = day + 1;
    } else {
      this.isContinue = false;
    }
  }

  registerChronogram(flag: boolean) {
    if (flag === false) {
      this.chronogramService.registerChronogram(this.request).subscribe(data => {
        this.backResponse = data;
        document.getElementById('modalRegisterButton').click();
        console.log(data);
      });
    }
  }

  validateWithModal() {
    this.chronogramRegister.reset();
    this.chronogramDatail.reset();
    this.sendList.splice(0, this.sendList.length);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-chronogram-register',
  templateUrl: './chronogram-register.component.html',
  styleUrls: ['./chronogram-register.component.css']
})
export class ChronogramRegisterComponent implements OnInit {

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

  constructor(private commonService: CommonService) { }

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
      activity1: new FormControl(''),
      activity2: new FormControl(''),
      activity3: new FormControl('')
    });
  }

  onSubmit() {
    this.request.chronogram = this.chronogramRegister.value;
    console.log(this.request);
  }

  onSubmitActivities() {
    console.log(this.chronogramDatail.value);
  }

  createTemporalActivitie() {
    const temp = document.createElement('input');
    temp.setAttribute('type', 'text');
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

}

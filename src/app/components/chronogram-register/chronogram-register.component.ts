import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chronogram-register',
  templateUrl: './chronogram-register.component.html',
  styleUrls: ['./chronogram-register.component.css']
})
export class ChronogramRegisterComponent implements OnInit {

  chronogramRegister: FormGroup;
  chronogramDatail: FormGroup;
  request: any = {
    commissioner: {
      employeeCode: 'asdasd'
    },
    chronogram: {},
    chronogramDatails: []
  };

  constructor() { }

  ngOnInit() {
    this.chronogramRegister = new FormGroup({
      nameService: new FormControl(''),
      destination: new FormControl(''),
      initialDate: new FormControl(''),
      finalDate: new FormControl(''),
      lodging: new FormControl(''),
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

}

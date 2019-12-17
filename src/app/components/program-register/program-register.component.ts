import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChronogramService } from 'src/app/services/chronogram.service';
import { ProgramService } from 'src/app/services/program.service';

@Component( {
  selector: 'app-program-register',
  templateUrl: './program-register.component.html',
  styleUrls: ['./program-register.component.css']
})
export class ProgramRegisterComponent implements OnInit {

  fRole: string;
  programRegister: FormGroup;

  chronogramCodeRoute = 0;
  miningEnt = '';
  empFullName = '';
  initialDate = '';
  finalDate = '';

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService,
              private chronogramService: ChronogramService,
              private router: Router) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    if (this.validateSession(this.fRole)) {
      this.chronogramCodeRoute = parseInt(this.route.snapshot.paramMap.get('chronogramCode'), 10);
      this.validateNanValue(this.chronogramCodeRoute);
      this.findChronogram(this.chronogramCodeRoute);
      this.programRegister = new FormGroup({
        chronogramCode: new FormControl(this.chronogramCodeRoute),
        viaticFlag: new FormControl(),
        lodgingCost: new FormControl('', Validators.required),
        transportCost: new FormControl('', Validators.required)
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  validateSession(role: string): boolean {
    if (role === null) {
      return false;
    } else {
      return true;
    }
  }

  validateNanValue(chronogramCodeRoute: number) {
    if (isNaN(chronogramCodeRoute)) {
      this.chronogramCodeRoute = 0;
    }
  }

  onSubmit() {
    const viatic = this.programRegister.value.viaticFlag;
    if (viatic) {
      this.programRegister.value.viaticFlag = 1;
      this.programRegister.value.lodgingCost = '';
      this.programRegister.value.transportCost = '';
    } else {
      this.programRegister.value.viaticFlag = 0;
    }

    if (this.chronogramCodeRoute !== 0) {
        this.programService.registerProgram(this.programRegister.value).subscribe( data => {
          if (parseInt(data.status, 10) === 1) {
            this.error = data.errorMessage;
            document.getElementById('modalToErrorButton').click();
          } else {
            this.backResponse.message = data.message;
            document.getElementById('modalRegisterButton').click();
          }
        });
    }
  }

  changeWithCheck(event: any) {
    if (event.target.checked) {
      this.programRegister.get('lodgingCost').setValue('');
      this.programRegister.get('transportCost').setValue('');
      this.programRegister.get('lodgingCost').disable();
      this.programRegister.get('transportCost').disable();
    } else {
      this.programRegister.get('lodgingCost').enable();
      this.programRegister.get('transportCost').enable();
    }
  }

  findChronogram(chronogramCode: number) {
    if (chronogramCode !== 0) {
      this.chronogramService.consultChronogram(chronogramCode).subscribe( data => {
        this.miningEnt = data.chronogram.miningEntity;
        this.empFullName = data.employeeName;
        this.initialDate = data.chronogram.initialDate;
        this.finalDate = data.chronogram.finalDate;
      });
    }
  }

  validateWithModal() {
    this.programRegister.reset();
    this.chronogramCodeRoute = 0;
    this.miningEnt = '';
    this.empFullName = '';
    this.initialDate = '';
    this.finalDate = '';
  }

}

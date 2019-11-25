import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-program-evaluate',
  templateUrl: './program-evaluate.component.html',
  styleUrls: ['./program-evaluate.component.css']
})
export class ProgramEvaluateComponent implements OnInit {

  fRole: string;
  programEvaluate: FormGroup;

  programCodeRoute = 0;
  miningEnt = '';
  empFullName = '';
  viatics = '';
  tDays = '';
  request: any = {
    programCode: 0,
    state: 0
  };

  backResponse: any = {};
  error = '';
  derivable = true;
  constructor(private route: ActivatedRoute,
              private programService: ProgramService) { }

  ngOnInit() {
    localStorage.setItem('tempCPV', '0');
    this.fRole = localStorage.getItem('empRole');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgram(this.programCodeRoute);
    this.programEvaluate = new FormGroup({
      programCode: new FormControl(this.programCodeRoute)
    });
  }

  onSubmit() {
    this.request.programCode = this.programEvaluate.value.programCode;
    this.request.state = 3;
    this.sendUpdateState(this.request);
  }

  disapproveProgram() {
    this.request.programCode = this.programEvaluate.value.programCode;
    this.request.state = 1;
    if (this.request.programCode !== 0) {
      this.sendUpdateState(this.request);
    } else {
      this.error = 'Para poder desaprobar debe seleccionar una programación.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  approveProgram() {
    this.request.programCode = this.programEvaluate.value.programCode;
    this.request.state = 0;
    if (this.request.programCode !== 0) {
      this.sendUpdateState(this.request);
    } else {
      this.error = 'Para poder aprobar debe seleccionar una programación.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  findProgram(programCode: number) {
    if (programCode !== 0) {
      this.programService.consultProgram(programCode).subscribe( data => {
        this.miningEnt = data.miningName;
        this.empFullName = data.employeeName;
        this.viatics = data.viatics;
        this.tDays = data.days;
        if (parseInt(this.tDays, 10) > 3) {
          this.derivable = false;
        }
      });
    }
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  sendUpdateState(request: any) {
    this.programService.updateProgramState(request).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.backResponse.message = data.message;
        document.getElementById('modalRegisterButton').click();
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalToErrorButton').click();
      }
    });
  }

  validateWithModal() {
    this.programCodeRoute = 0;
    this.programEvaluate.reset();
    this.programEvaluate.get('programCode').setValue(this.programCodeRoute);
    this.miningEnt = '';
    this.empFullName = '';
    this.viatics = '';
    this.tDays = '';
  }


}

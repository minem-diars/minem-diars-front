import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-program-verify',
  templateUrl: './program-verify.component.html',
  styleUrls: ['./program-verify.component.css']
})
export class ProgramVerifyComponent implements OnInit {

  fRole = '';

  programCodeRoute = 0;
  employeeName = '';
  miningName = '';
  activities: any;
  error = '';
  request: any = {
    programCode: 0,
    state: 4
  };
  backResponse: any = {};

  constructor(private route: ActivatedRoute,
              private programService: ProgramService) { }

  ngOnInit() {
    localStorage.setItem('tempCPV', '2');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgram(this.programCodeRoute);
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  findProgram(programCode: number) {
    if (programCode !== 0) {
      this.programService.verifyProgram(programCode).subscribe( data => {
        this.employeeName = data.employeeName;
        this.miningName = data.miningName;
        this.activities = data.activities;
        console.log(this.activities);
      });
    }
  }

  derive() {
    this.request.programCode = this.programCodeRoute;
    if (this.request.programCode !== 0) {
      this.sendUpdateState(this.request);
    } else {
      this.error = 'Para poder aprobar debe seleccionar una programación.';
      document.getElementById('modalToErrorButton').click();
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

}

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
    role: '',
    state: 0,
    derv_dg: 0,
    derv_ol: 0,
    state_dl: 0
  };
  backResponse: any = {};

  constructor(private route: ActivatedRoute,
              private programService: ProgramService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    localStorage.setItem('tempCPV', '3');
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
      });
    }
  }

  derive() {
    this.request.programCode = this.programCodeRoute;
    if (this.request.programCode !== 0) {
      this.reqOLOGder();
      this.sendUpdateState(this.request);
    } else {
      this.error = 'Para poder derivar debe seleccionar una programación.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  sendUpdateState(request: any) {
    this.programService.updateProgramState(request).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.backResponse.description = data.message;
        document.getElementById('modalDeriveButton').click();
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalToErrorButton').click();
      }
    });
  }

  reqOLOGder() {
    this.request.role = 'ROLE_OLOG';
    this.request.state = 1;
    this.request.derv_dg = 0;
    this.request.derv_ol = 1;
    this.request.state_dl = 0;
  }

}

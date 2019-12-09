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
    role: '',
    idUserDlog: 0,
    state: 0,
    derv_dg: 0,
    derv_ol: 0,
    state_dl: 0
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
  }

  disapproveProgram() {
    this.request.programCode = this.programEvaluate.value.programCode;
    if (this.request.programCode !== 0) {
      if (this.fRole === 'ROLE_DGFM') {
        this.reqDGFMden();
      } else if (this.fRole === 'ROLE_VICE') {
        this.reqVICEden();
      } else if (this.fRole === 'ROLE_DLOG') {
        this.reqDLOGden();
      }
      this.sendUpdateState(this.request);
    } else {
      this.error = 'Para poder desaprobar debe seleccionar una programación.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  approveProgram() {
    this.request.programCode = this.programEvaluate.value.programCode;
    if (this.request.programCode !== 0) {
      if (this.fRole === 'ROLE_DGFM') {
        this.reqDGFMace();
      } else if (this.fRole === 'ROLE_VICE') {
        this.reqVICEace();
      } else if (this.fRole === 'ROLE_DLOG') {
        this.reqDLOGace();
      }
      this.sendUpdateState(this.request);
    } else {
      this.error = 'Para poder aprobar debe seleccionar una programación.';
      document.getElementById('modalToErrorButton').click();
    }
  }

  derivaProgram() {
    this.request.programCode = this.programEvaluate.value.programCode;
    if (this.request.programCode !== 0) {
      this.reqDGFMder();
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

  reqDGFMace() {
    this.request.role = 'ROLE_DGFM';
    this.request.state = 1;
    this.request.derv_dg = 0;
    this.request.derv_ol = 0;
    this.request.state_dl = 0;
  }

  reqDGFMden() {
    this.request.role = 'ROLE_DGFM';
    this.request.state = 0;
    this.request.derv_dg = 0;
    this.request.derv_ol = 0;
    this.request.state_dl = 0;
  }

  reqDGFMder() {
    this.request.role = 'ROLE_DGFM';
    this.request.state = 2;
    this.request.derv_dg = 1;
    this.request.derv_ol = 0;
    this.request.state_dl = 0;
  }

  reqVICEace() {
    this.request.role = 'ROLE_VICE';
    this.request.state = 1;
    this.request.derv_dg = 1;
    this.request.derv_ol = 0;
    this.request.state_dl = 0;
  }

  reqVICEden() {
    this.request.role = 'ROLE_VICE';
    this.request.state = 0;
    this.request.derv_dg = 1;
    this.request.derv_ol = 0;
    this.request.state_dl = 0;
  }

  reqDLOGace() {
    this.request.role = 'ROLE_DLOG';
    this.request.state = 1;
    this.request.idUserDlog = parseInt(localStorage.getItem('empCode'), 10);
    this.request.derv_dg = 0;
    this.request.derv_ol = 1;
    this.request.state_dl = 1;
  }

  reqDLOGden() {
    this.request.role = 'ROLE_DLOG';
    this.request.state = 1;
    this.request.derv_dg = 0;
    this.request.derv_ol = 1;
    this.request.state_dl = 0;
  }

}

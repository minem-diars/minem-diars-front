import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../services/program.service';
import { ChangeRequestService } from '../../services/change-request.service';

@Component({
  selector: 'app-change-request-register',
  templateUrl: './change-request-register.component.html',
  styleUrls: ['./change-request-register.component.css']
})
export class ChangeRequestRegisterComponent implements OnInit {

  fRole: string;
  changeRequestForm: FormGroup;

  programCodeRoute = 0;
  miningEnt = '';
  empFullName = '';
  initialDate = '';
  finalDate = '';
  viaticFlag = 0;
  lodging = '';
  transport = '';

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService,
              private changeRequestService: ChangeRequestService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgramInfo(this.programCodeRoute);
    this.changeRequestForm = new FormGroup({
      programCode: new FormControl(this.programCodeRoute),
      observations: new FormControl('', Validators.required)
    });
  }

  findProgramInfo(programCodeRoute: number) {
    if (programCodeRoute !== 0) {
      this.programService.consultForUpdateProgram(programCodeRoute, 0).subscribe( data => {
        if (parseInt(data.status, 10) === 0) {
          this.miningEnt = data.miningName;
          this.empFullName = data.employeeName;
          this.initialDate = data.initialDate;
          this.finalDate = data.finalDate;
          this.viaticFlag = data.viaticFlag;
          this.lodging = data.lodgingCost;
          this.transport = data.transportCost;
        } else {
          this.error = data.errorMessage;
          document.getElementById('modalToErrorButton').click();
        }
      });
    }
  }

  onSubmit() {
    this.changeRequestService.registerChangeRequest(this.changeRequestForm.value).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.backResponse.description = data.message;
        document.getElementById('modalRegisterButton').click();
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalToErrorButton').click();
      }
    });
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  changeWithCheck(event: any) {
    if (event.target.checked) {
      this.changeRequestForm.get('lodgingCost').setValue('');
      this.changeRequestForm.get('transportCost').setValue('');
      this.changeRequestForm.get('lodgingCost').disable();
      this.changeRequestForm.get('transportCost').disable();
    } else {
      this.changeRequestForm.get('lodgingCost').enable();
      this.changeRequestForm.get('transportCost').enable();
    }
  }

}

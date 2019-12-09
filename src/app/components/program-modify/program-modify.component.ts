import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../services/program.service';
import { ChangeRequestService } from '../../services/change-request.service';

@Component({
  selector: 'app-program-modify',
  templateUrl: './program-modify.component.html',
  styleUrls: ['./program-modify.component.css']
})
export class ProgramModifyComponent implements OnInit {

  fRole: string;
  programUpdateForm: FormGroup;

  programCodeRoute = 0;
  miningEnt = '';
  empFullName = '';
  initialDate = '';
  finalDate = '';
  viaticFlag = 0;
  lodging = '';
  transport = '';
  observations = '';

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgramInfo(this.programCodeRoute);
    this.programUpdateForm = new FormGroup({
      programCode: new FormControl(this.programCodeRoute),
      initialDate: new FormControl('', Validators.required),
      finalDate: new FormControl('', Validators.required),
      viaticFlag: new FormControl(Validators.required),
      lodging: new FormControl('', Validators.required),
      transport: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.programUpdateForm.value.viaticFlag) {
      this.programUpdateForm.get('viaticFlag').setValue(1);
    } else {
      this.programUpdateForm.get('viaticFlag').setValue(0);
    }
    this.programService.postUpdateProgram(this.programUpdateForm.value).subscribe( data => {
      if (parseInt(data.status, 10) === 0) {
        this.backResponse.description = data.message;
        document.getElementById('modalRegisterButton').click();
      } else {
        this.error = data.errorMessage;
        document.getElementById('modalToErrorButton').click();
      }
    });
  }

  findProgramInfo(programCodeRoute: number) {
    if (programCodeRoute !== 0) {
      this.programService.consultForUpdateProgram(programCodeRoute, 1).subscribe( data => {
        if (parseInt(data.status, 10) === 0) {
          this.miningEnt = data.miningName;
          this.empFullName = data.employeeName;
          this.programUpdateForm.get('initialDate').setValue(data.initialDate);
          this.programUpdateForm.get('finalDate').setValue(data.finalDate);
          this.programUpdateForm.get('viaticFlag').setValue(data.viaticFlag);
          this.programUpdateForm.get('lodging').setValue(data.lodgingCost);
          this.programUpdateForm.get('transport').setValue(data.transportCost);
          this.observations = data.observations;
          console.log(this.programUpdateForm.value);
        } else {
          this.error = data.errorMessage;
          document.getElementById('modalToErrorButton').click();
        }
      });
    }
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  changeWithCheck(event: any) {
    if (event.target.checked) {
      this.programUpdateForm.get('lodging').setValue('');
      this.programUpdateForm.get('transport').setValue('');
      this.programUpdateForm.get('lodging').disable();
      this.programUpdateForm.get('transport').disable();
    } else {
      this.programUpdateForm.get('lodging').enable();
      this.programUpdateForm.get('transport').enable();
    }
  }

}

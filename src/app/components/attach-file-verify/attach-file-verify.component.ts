import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../../services/program.service';

@Component({
  selector: 'app-attach-file-verify',
  templateUrl: './attach-file-verify.component.html',
  styleUrls: ['./attach-file-verify.component.css']
})
export class AttachFileVerifyComponent implements OnInit {

  fRole: string;

  files: any;

  programCodeRoute = 0;

  employeeName = '';
  miningName = '';

  isEnable = true;

  backResponse: any = {};
  error = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService) { }

  ngOnInit() {
    this.fRole = localStorage.getItem('empRole');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgramForAttachFile(this.programCodeRoute);
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  findProgramForAttachFile(programCodeRoute: number) {
    if (programCodeRoute !== 0) {
      this.programService.consultProgramsForFiles(programCodeRoute).subscribe( data => {
      this.employeeName = data.employeeFullName;
      this.miningName = data.miningName;
      this.files = data.files;
      });
    }
  }

  downloadData(fileName: string) {
    this.programService.downloadFile(this.programCodeRoute, fileName);
  }

}

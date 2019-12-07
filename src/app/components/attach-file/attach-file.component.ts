import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProgramService } from '../../services/program.service';
import { ActivatedRoute } from '@angular/router';
import { AttachFileService } from 'src/app/services/attach-file.service';

@Component({
  selector: 'app-attach-file',
  templateUrl: './attach-file.component.html',
  styleUrls: ['./attach-file.component.css']
})
export class AttachFileComponent implements OnInit {

  fRole: string;

  filesUploaded: FileList;

  programCodeRoute = 0;

  employeeName = '';
  miningName = '';

  constructor(private route: ActivatedRoute,
              private programService: ProgramService,
              private attachFileService: AttachFileService) { }

  ngOnInit() {
    localStorage.setItem('tempCPV', '1');
    this.fRole = localStorage.getItem('empRole');
    this.programCodeRoute = parseInt(this.route.snapshot.paramMap.get('programCode'), 10);
    this.validateNanValue(this.programCodeRoute);
    this.findProgramForAttachFile(this.programCodeRoute);
  }

  attachFiles(event: any) {
    console.log(event);
    this.filesUploaded = event;
  }

  validateNanValue(programCodeRoute: number) {
    if (isNaN(programCodeRoute)) {
      this.programCodeRoute = 0;
    }
  }

  findProgramForAttachFile(programCodeRoute: number) {
    if (programCodeRoute !== 0) {
      this.programService. consultProgram(programCodeRoute).subscribe( data => {
      this.employeeName = data.employeeName;
      this.miningName = data.miningName;
      });
    }
  }

  getDataTable(evt: any) {
    for (const index of evt) {
      const key: any = document.getElementById(index.name);
      this.attachFileService.uploadFile(this.programCodeRoute, key.value, index).subscribe( data => {
        console.log(data);
      });
    }
  }

  downloadData() {
    this.programService.testD(1).subscribe( data => {
      console.log(data);
    });
  }

  testD() {
    const URL = 'http://localhost:8080/travel/file/v1/download/4/Pagos';
    window.open(URL);
  }

}
